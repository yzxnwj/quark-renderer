Ext.data.JsonP.zrender_graphic_Element({"tagname":"class","name":"zrender.graphic.Element","autodetected":{},"files":[{"filename":"Element.js","href":"Element.html#zrender-graphic-Element"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"__dirty","tagname":"property","owner":"zrender.graphic.Element","id":"property-__dirty","meta":{"private":true}},{"name":"__zr","tagname":"property","owner":"zrender.graphic.Element","id":"property-__zr","meta":{"private":true}},{"name":"_rect","tagname":"property","owner":"zrender.graphic.Element","id":"property-_rect","meta":{"private":true}},{"name":"afterUpdate","tagname":"property","owner":"zrender.graphic.Element","id":"property-afterUpdate","meta":{}},{"name":"beforeUpdate","tagname":"property","owner":"zrender.graphic.Element","id":"property-beforeUpdate","meta":{}},{"name":"clipPath","tagname":"property","owner":"zrender.graphic.Element","id":"property-clipPath","meta":{}},{"name":"id","tagname":"property","owner":"zrender.graphic.Element","id":"property-id","meta":{}},{"name":"ignore","tagname":"property","owner":"zrender.graphic.Element","id":"property-ignore","meta":{}},{"name":"isGroup","tagname":"property","owner":"zrender.graphic.Element","id":"property-isGroup","meta":{}},{"name":"name","tagname":"property","owner":"zrender.graphic.Element","id":"property-name","meta":{}},{"name":"options","tagname":"property","owner":"zrender.graphic.Element","id":"property-options","meta":{"protected":true}},{"name":"traverse","tagname":"property","owner":"zrender.graphic.Element","id":"property-traverse","meta":{}},{"name":"type","tagname":"property","owner":"zrender.graphic.Element","id":"property-type","meta":{}},{"name":"update","tagname":"property","owner":"zrender.graphic.Element","id":"property-update","meta":{}},{"name":"constructor","tagname":"method","owner":"zrender.graphic.Element","id":"method-constructor","meta":{}},{"name":"","tagname":"method","owner":"zrender.graphic.Element","id":"method-","meta":{}},{"name":"addSelfToZr","tagname":"method","owner":"zrender.graphic.Element","id":"method-addSelfToZr","meta":{}},{"name":"attr","tagname":"method","owner":"zrender.graphic.Element","id":"method-attr","meta":{}},{"name":"attrKV","tagname":"method","owner":"zrender.graphic.Element","id":"method-attrKV","meta":{"protected":true}},{"name":"dirty","tagname":"method","owner":"zrender.graphic.Element","id":"method-dirty","meta":{"protected":true}},{"name":"hide","tagname":"method","owner":"zrender.graphic.Element","id":"method-hide","meta":{}},{"name":"removeClipPath","tagname":"method","owner":"zrender.graphic.Element","id":"method-removeClipPath","meta":{}},{"name":"removeSelfFromZr","tagname":"method","owner":"zrender.graphic.Element","id":"method-removeSelfFromZr","meta":{}},{"name":"setClipPath","tagname":"method","owner":"zrender.graphic.Element","id":"method-setClipPath","meta":{}},{"name":"show","tagname":"method","owner":"zrender.graphic.Element","id":"method-show","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-zrender.graphic.Element","short_doc":"Root class, everything visable in ZRender is subclass of Element. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Element.html#zrender-graphic-Element' target='_blank'>Element.js</a></div></pre><div class='doc-contents'><p>Root class, everything visable in ZRender is subclass of Element.\nThis is an abstract class, please don't creat an instance directly.</p>\n\n<p>根类，ZRender 中所有可见的对象都是 Element 的子类。这是一个抽象类，请不要\n直接 new 这个类的实例。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__dirty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-__dirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-__dirty' class='name expandable'>__dirty</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Dirty flag. ...</div><div class='long'><p>Dirty flag. From which painter will determine if this displayable object needs to be repainted.</p>\n\n<p>这是一个非常重要的标志位，在绘制大量对象的时候，把 __dirty 标记为 false 可以节省大量操作。</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-__zr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-__zr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-__zr' class='name expandable'>__zr</a> : ZRender<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>ZRender instance will be assigned when element is associated with zrender</p>\n\n<p>ZRender 实例对象，会在 element 添加到 zrender 实例中后自动赋值</p>\n</div><div class='long'><p>ZRender instance will be assigned when element is associated with zrender</p>\n\n<p>ZRender 实例对象，会在 element 添加到 zrender 实例中后自动赋值</p>\n</div></div></div><div id='property-_rect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-_rect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-_rect' class='name expandable'>_rect</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-afterUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-afterUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-afterUpdate' class='name expandable'>afterUpdate</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Hook after update</p>\n\n<p>刷新之后回调</p>\n</div><div class='long'><p>Hook after update</p>\n\n<p>刷新之后回调</p>\n</div></div></div><div id='property-beforeUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-beforeUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-beforeUpdate' class='name expandable'>beforeUpdate</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Hook before update</p>\n\n<p>刷新之前回调</p>\n</div><div class='long'><p>Hook before update</p>\n\n<p>刷新之前回调</p>\n</div></div></div><div id='property-clipPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-clipPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-clipPath' class='name expandable'>clipPath</a> : Path<span class=\"signature\"></span></div><div class='description'><div class='short'><p>用于裁剪的路径(shape)，所有 Group 内的路径在绘制时都会被这个路径裁剪\n该路径会继承被裁减对象的变换\n@readOnly\n@see http://www.w3.org/TR/2dcontext/#clipping-region</p>\n</div><div class='long'><p>用于裁剪的路径(shape)，所有 Group 内的路径在绘制时都会被这个路径裁剪\n该路径会继承被裁减对象的变换\n@readOnly\n@see http://www.w3.org/TR/2dcontext/#clipping-region</p>\n</div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-id' class='name expandable'>id</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-ignore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-ignore' class='name expandable'>ignore</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If ignore drawing and events of the element object\n图形是否忽略，为true时忽略图形的绘制以及事件触发 ...</div><div class='long'><p>If ignore drawing and events of the element object\n图形是否忽略，为true时忽略图形的绘制以及事件触发</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-isGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-isGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-isGroup' class='name expandable'>isGroup</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>是否是 Group ...</div><div class='long'><p>是否是 Group</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-name' class='name expandable'>name</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>元素名字 ...</div><div class='long'><p>元素名字</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-options' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-options' class='name expandable'>options</a> : Object<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>配置项</p>\n</div><div class='long'><p>配置项</p>\n</div></div></div><div id='property-traverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-traverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-traverse' class='name expandable'>traverse</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-type' class='name expandable'>type</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>元素类型 ...</div><div class='long'><p>元素类型</p>\n<p>Defaults to: <code>&#39;element&#39;</code></p></div></div></div><div id='property-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-property-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-property-update' class='name expandable'>update</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Update each frame</p>\n\n<p>刷新每一帧回调</p>\n</div><div class='long'><p>Update each frame</p>\n\n<p>刷新每一帧回调</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/zrender.graphic.Element-method-constructor' class='name expandable'>zrender.graphic.Element</a>( <span class='pre'></span> ) : <a href=\"#!/api/zrender.graphic.Element\" rel=\"zrender.graphic.Element\" class=\"docClass\">zrender.graphic.Element</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Element ...</div><div class='long'><p>Element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.graphic.Element\" rel=\"zrender.graphic.Element\" class=\"docClass\">zrender.graphic.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-' class='name expandable'></a>( <span class='pre'>dx, dy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Drift element\n移动图元 ...</div><div class='long'><p>Drift element\n移动图元</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dx</span> : Number<div class='sub-desc'><p>dx on the global space</p>\n</div></li><li><span class='pre'>dy</span> : Number<div class='sub-desc'><p>dy on the global space</p>\n</div></li></ul></div></div></div><div id='method-addSelfToZr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-addSelfToZr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-addSelfToZr' class='name expandable'>addSelfToZr</a>( <span class='pre'>zr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add self to zrender instance. ...</div><div class='long'><p>Add self to zrender instance.\nNot recursively because it will be invoked when element added to storage.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zr</span> : ZRender<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-attr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-attr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-attr' class='name expandable'>attr</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>修改对象上的属性。 ...</div><div class='long'><p>修改对象上的属性。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String|Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-attrKV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-attrKV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-attrKV' class='name expandable'>attrKV</a>( <span class='pre'>key, value</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-dirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-dirty' class='name expandable'>dirty</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Mark displayable element dirty and refresh next frame ...</div><div class='long'><p>Mark displayable element dirty and refresh next frame</p>\n</div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Hide the element ...</div><div class='long'><p>Hide the element</p>\n</div></div></div><div id='method-removeClipPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-removeClipPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-removeClipPath' class='name expandable'>removeClipPath</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-removeSelfFromZr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-removeSelfFromZr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-removeSelfFromZr' class='name expandable'>removeSelfFromZr</a>( <span class='pre'>zr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove self from zrender instance. ...</div><div class='long'><p>Remove self from zrender instance.\nNot recursively because it will be invoked when element added to storage.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zr</span> : ZRender<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setClipPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-setClipPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-setClipPath' class='name expandable'>setClipPath</a>( <span class='pre'>clipPath</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clipPath</span> : Path<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Element'>zrender.graphic.Element</span><br/><a href='source/Element.html#zrender-graphic-Element-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Element-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show the element ...</div><div class='long'><p>Show the element</p>\n</div></div></div></div></div></div></div>","meta":{}});