import easingFuncs from './easing';
import {mathMin} from '../utils/constants';

/**
 * @class qrenderer.animation.Timeline
 * Timeline，时间线，用来计算元素上的某个属性在指定时间点的数值。
 * @docauthor 大漠穷秋 <damoqiongqiu@126.com>
 */

export default class Timeline{
    /**
     * @method constructor Timeline
     * @param {Object} options 
     * @param {Element} options.element 正在进行动画的元素
     * @param {Number} options.life(1000) 动画时长
     * @param {Number} options.delay(0) 动画延迟时间
     * @param {Boolean} options.loop(true)
     * @param {Number} options.gap(0) 循环的间隔时间
     * @param {Function} options.onframe
     * @param {String} options.easing(optional)
     * @param {Function} options.ondestroy(optional)
     * @param {Function} options.onrestart(optional)
     */
    constructor(options){
        this.element = options.element;
        this.lifeTime = options.lifeTime || 1000;
        this.delay = options.delay || 0;
        this.loop = options.loop == null ? false : options.loop;
        this.gap = options.gap || 0;
        this.easing = options.easing || 'Linear';
        this.onframe = options.onframe;
        this.ondestroy = options.ondestroy;
        this.onrestart = options.onrestart;
        
        this._initialized = false;
        this._pausedTime = 0;
        this._paused = false;
    }

    /**
     * @method nextFrame
     * 进入下一帧
     * @param {Number} globalTime 当前时间
     * @param {Number} deltaTime  时间偏移量
     * //TODO:try move this into webworker
     */
    nextFrame(globalTime, deltaTime) {
        // Set startTime on first frame, or _startTime may has milleseconds different between clips
        // PENDING
        if (!this._initialized) {
            this._startTime = globalTime + this.delay;
            this._initialized = true;
        }

        if (this._paused) {
            this._pausedTime += deltaTime;
            return;
        }

        let percent = (globalTime - this._startTime - this._pausedTime) / this.lifeTime;
        // 还没开始
        if (percent < 0) {
            return;
        }
        percent = mathMin(percent, 1);

        let easing = this.easing;
        let easingFunc = typeof easing === 'string'
            ? easingFuncs[easing] 
            : easing;
        let schedule = typeof easingFunc === 'function'
            ? easingFunc(percent)
            : percent;
        
        if (percent === 1) {// animation 100% finished
            if (this.loop) {
                this.restart(globalTime);
                return 'restart';
            }
            return 'destroy';
        }else{
            this.fire('frame', schedule);
            return percent;
        }
    }

    /**
     * @method restart
     * 重新开始
     * @param {Number} globalTime 
     */
    restart(globalTime) {
        let remainder = (globalTime - this._startTime - this._pausedTime) % this.lifeTime;
        this._startTime = globalTime - remainder + this.gap;
        this._pausedTime = 0;
    }

    /**
     * @method fire
     * 触发事件
     * @param {String} eventType 
     * @param {Object} arg 
     */
    fire(eventType, arg) {
        eventType = 'on' + eventType;
        if (this[eventType]) {
            this[eventType](this.element, arg);
        }
    }

    /**
     * @method pause
     * 暂停
     */
    pause() {
        this._paused = true;
    }

    /**
     * @method resume
     * 恢复运行
     */
    resume() {
        this._paused = false;
    }
}