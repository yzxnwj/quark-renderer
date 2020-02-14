Ext.data.JsonP.zrender_graphic_Displayable({"tagname":"class","name":"zrender.graphic.Displayable","autodetected":{},"files":[{"filename":"Displayable.js","href":"Displayable.html#zrender-graphic-Displayable"}],"abstract":true,"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"__clipPaths","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-__clipPaths","meta":{"private":true}},{"name":"culling","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-culling","meta":{}},{"name":"cursor","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-cursor","meta":{}},{"name":"draggable","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-draggable","meta":{}},{"name":"dragging","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-dragging","meta":{}},{"name":"globalScaleRatio","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-globalScaleRatio","meta":{}},{"name":"incremental","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-incremental","meta":{}},{"name":"invisible","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-invisible","meta":{}},{"name":"progressive","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-progressive","meta":{}},{"name":"rectHover","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-rectHover","meta":{}},{"name":"shape","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-shape","meta":{}},{"name":"silent","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-silent","meta":{}},{"name":"style","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-style","meta":{}},{"name":"type","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-type","meta":{}},{"name":"z","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-z","meta":{}},{"name":"z2","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-z2","meta":{}},{"name":"zlevel","tagname":"property","owner":"zrender.graphic.Displayable","id":"property-zlevel","meta":{}},{"name":"constructor","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-constructor","meta":{}},{"name":"afterBrush","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-afterBrush","meta":{"protected":true}},{"name":"animateStyle","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-animateStyle","meta":{}},{"name":"attrKV","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-attrKV","meta":{}},{"name":"beforeBrush","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-beforeBrush","meta":{"protected":true}},{"name":"brush","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-brush","meta":{"protected":true}},{"name":"calculateTextPosition","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-calculateTextPosition","meta":{}},{"name":"contain","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-contain","meta":{"protected":true}},{"name":"getBoundingRect","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-getBoundingRect","meta":{"protected":true}},{"name":"rectContain","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-rectContain","meta":{"protected":true}},{"name":"setStyle","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-setStyle","meta":{}},{"name":"traverse","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-traverse","meta":{}},{"name":"useStyle","tagname":"method","owner":"zrender.graphic.Displayable","id":"method-useStyle","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-zrender.graphic.Displayable","short_doc":"Base class of all displayable graphic objects. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Displayable.html#zrender-graphic-Displayable' target='_blank'>Displayable.js</a></div></pre><div class='doc-contents'><p>Base class of all displayable graphic objects.</p>\n\n<p>所有图形对象的基类，抽象类。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__clipPaths' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-__clipPaths' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-__clipPaths' class='name expandable'>__clipPaths</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Shapes for cascade clipping. ...</div><div class='long'><p>Shapes for cascade clipping.\nCan only be <code>null</code>/<code>undefined</code> or an non-empty array, MUST NOT be an empty array.\nbecause it is easy to only using null to check whether clipPaths changed.</p>\n</div></div></div><div id='property-culling' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-culling' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-culling' class='name expandable'>culling</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>If enable culling ...</div><div class='long'><p>If enable culling</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-cursor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-cursor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-cursor' class='name expandable'>cursor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Mouse cursor when hovered ...</div><div class='long'><p>Mouse cursor when hovered</p>\n<p>Defaults to: <code>&#39;pointer&#39;</code></p></div></div></div><div id='property-draggable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-draggable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-draggable' class='name expandable'>draggable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether it can be dragged. ...</div><div class='long'><p>Whether it can be dragged.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-dragging' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-dragging' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-dragging' class='name expandable'>dragging</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether is it dragging. ...</div><div class='long'><p>Whether is it dragging.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-globalScaleRatio' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-globalScaleRatio' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-globalScaleRatio' class='name expandable'>globalScaleRatio</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Scale ratio for global scale. ...</div><div class='long'><p>Scale ratio for global scale.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-incremental' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-incremental' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-incremental' class='name expandable'>incremental</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-invisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-invisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-invisible' class='name expandable'>invisible</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the displayable object is visible. ...</div><div class='long'><p>Whether the displayable object is visible. when it is true, the displayable object\nis not drawn, but the mouse event can still trigger the object.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-progressive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-progressive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-progressive' class='name expandable'>progressive</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Render the element progressively when the value >= 0,\nusefull for large data. ...</div><div class='long'><p>Render the element progressively when the value >= 0,\nusefull for large data.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-rectHover' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-rectHover' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-rectHover' class='name expandable'>rectHover</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>If hover area is bounding rect ...</div><div class='long'><p>If hover area is bounding rect</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-shape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-shape' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-shape' class='name expandable'>shape</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>形状 ...</div><div class='long'><p>形状</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-silent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-silent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-silent' class='name expandable'>silent</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether to respond to mouse events. ...</div><div class='long'><p>Whether to respond to mouse events.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-style' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-style' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-style' class='name expandable'>style</a> : Style<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-type' class='name expandable'>type</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;displayable&#39;</code></p></div></div></div><div id='property-z' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-z' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-z' class='name expandable'>z</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-z2' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-z2' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-z2' class='name expandable'>z2</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-zlevel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-property-zlevel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-property-zlevel' class='name expandable'>zlevel</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The z level determines the displayable object can be drawn in which layer canvas. ...</div><div class='long'><p>The z level determines the displayable object can be drawn in which layer canvas.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/zrender.graphic.Displayable-method-constructor' class='name expandable'>zrender.graphic.Displayable</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/zrender.graphic.Displayable\" rel=\"zrender.graphic.Displayable\" class=\"docClass\">zrender.graphic.Displayable</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/zrender.graphic.Displayable\" rel=\"zrender.graphic.Displayable\" class=\"docClass\">zrender.graphic.Displayable</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterBrush' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-afterBrush' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-afterBrush' class='name expandable'>afterBrush</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-animateStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-animateStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-animateStyle' class='name expandable'>animateStyle</a>( <span class='pre'>loop</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for animate('style') ...</div><div class='long'><p>Alias for animate('style')</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>loop</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-attrKV' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-attrKV' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-attrKV' class='name expandable'>attrKV</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beforeBrush' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-beforeBrush' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-beforeBrush' class='name expandable'>beforeBrush</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-brush' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-brush' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-brush' class='name expandable'>brush</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Callback during brush. ...</div><div class='long'><p>Callback during brush.</p>\n</div></div></div><div id='method-calculateTextPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-calculateTextPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-calculateTextPosition' class='name expandable'>calculateTextPosition</a>( <span class='pre'>[out], style, rect</span> ) : Obejct<span class=\"signature\"></span></div><div class='description'><div class='short'>The String value of textPosition needs to be calculated to a real postion. ...</div><div class='long'><p>The String value of <code>textPosition</code> needs to be calculated to a real postion.\nFor example, <code>'inside'</code> is calculated to <code>[rect.width/2, rect.height/2]</code>\nby default. See <code>contain/text.js#calculateTextPosition</code> for more details.\nBut some coutom shapes like \"pin\", \"flag\" have center that is not exactly\n<code>[width/2, height/2]</code>. So we provide this hook to customize the calculation\nfor those shapes. It will be called if the <code>style.textPosition</code> is a String.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : Obejct (optional)<div class='sub-desc'><p>Prepared out object. If not provided, this method should\n       be responsible for creating one.</p>\n</div></li><li><span class='pre'>style</span> : Style<div class='sub-desc'>\n</div></li><li><span class='pre'>rect</span> : Object<div class='sub-desc'><p>{x, y, width, height}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Obejct</span><div class='sub-desc'><p>out The same as the input out.\n        {\n            x: Number. mandatory.\n            y: Number. mandatory.\n            textAlign: String. optional. use style.textAlign by default.\n            textVerticalAlign: String. optional. use style.textVerticalAlign by default.\n        }</p>\n</div></li></ul></div></div></div><div id='method-contain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-contain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-contain' class='name expandable'>contain</a>( <span class='pre'>x, y</span> ) : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>If displayable element contain coord x, y, this is an util function for\ndetermine where two elements overlap. ...</div><div class='long'><p>If displayable element contain coord x, y, this is an util function for\ndetermine where two elements overlap.</p>\n\n<p>图元是否包含坐标(x,y)，此工具方法用来判断两个图元是否重叠。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBoundingRect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-getBoundingRect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-getBoundingRect' class='name expandable'>getBoundingRect</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-rectContain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-rectContain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-rectContain' class='name expandable'>rectContain</a>( <span class='pre'>x, y</span> ) : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>If bounding rect of element contain coord x, y. ...</div><div class='long'><p>If bounding rect of element contain coord x, y.</p>\n\n<p>用来判断当前图元的外框矩形是否包含坐标点(x,y)。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-setStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-setStyle' class='name expandable'>setStyle</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object|String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-traverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-traverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-traverse' class='name expandable'>traverse</a>( <span class='pre'>cb, context</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-useStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.graphic.Displayable'>zrender.graphic.Displayable</span><br/><a href='source/Displayable.html#zrender-graphic-Displayable-method-useStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.graphic.Displayable-method-useStyle' class='name expandable'>useStyle</a>( <span class='pre'>obj</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Use given style object ...</div><div class='long'><p>Use given style object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});