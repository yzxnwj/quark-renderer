Ext.data.JsonP.qrenderer_event_MultiDragDrop({"tagname":"class","name":"qrenderer.event.MultiDragDrop","autodetected":{},"files":[{"filename":"MultiDragDrop.js","href":"MultiDragDrop.html#qrenderer-event-MultiDragDrop"}],"author":[{"tagname":"author","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋","email":"damoqiongqiu@126.com"}],"members":[{"name":"constructor","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-constructor","meta":{}},{"name":"_drag","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-_drag","meta":{"private":true}},{"name":"_dragEnd","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-_dragEnd","meta":{"private":true}},{"name":"_dragStart","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-_dragStart","meta":{"private":true}},{"name":"clearSelectionMap","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-clearSelectionMap","meta":{}},{"name":"getSelectedItems","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-getSelectedItems","meta":{}},{"name":"param","tagname":"method","owner":"qrenderer.event.MultiDragDrop","id":"method-param","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-qrenderer.event.MultiDragDrop","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop' target='_blank'>MultiDragDrop.js</a></div></pre><div class='doc-contents'><p>支持同时拖拽多个元素，按住 Ctrl 键可以多选。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/qrenderer.event.MultiDragDrop-method-constructor' class='name expandable'>qrenderer.event.MultiDragDrop</a>( <span class='pre'>handler</span> ) : <a href=\"#!/api/qrenderer.event.MultiDragDrop\" rel=\"qrenderer.event.MultiDragDrop\" class=\"docClass\">qrenderer.event.MultiDragDrop</a><span class=\"signature\"></span></div><div class='description'><div class='short'>MultiDragDrop ...</div><div class='long'><p>MultiDragDrop</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : QRendererEventHandler<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/qrenderer.event.MultiDragDrop\" rel=\"qrenderer.event.MultiDragDrop\" class=\"docClass\">qrenderer.event.MultiDragDrop</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_drag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-_drag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.MultiDragDrop-method-_drag' class='name expandable'>_drag</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>拖动过程中 ...</div><div class='long'><p>拖动过程中</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_dragEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-_dragEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.MultiDragDrop-method-_dragEnd' class='name expandable'>_dragEnd</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>拖动结束 ...</div><div class='long'><p>拖动结束</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_dragStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-_dragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.MultiDragDrop-method-_dragStart' class='name expandable'>_dragStart</a>( <span class='pre'>e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>开始拖动 ...</div><div class='long'><p>开始拖动</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clearSelectionMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-clearSelectionMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.MultiDragDrop-method-clearSelectionMap' class='name expandable'>clearSelectionMap</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>清除选中 ...</div><div class='long'><p>清除选中</p>\n</div></div></div><div id='method-getSelectedItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-getSelectedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.MultiDragDrop-method-getSelectedItems' class='name expandable'>getSelectedItems</a>( <span class='pre'></span> ) : Map<span class=\"signature\"></span></div><div class='description'><div class='short'>获取当前选中的元素 ...</div><div class='long'><p>获取当前选中的元素</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Map</span><div class='sub-desc'><p>selectionMap</p>\n</div></li></ul></div></div></div><div id='method-param' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='qrenderer.event.MultiDragDrop'>qrenderer.event.MultiDragDrop</span><br/><a href='source/MultiDragDrop.html#qrenderer-event-MultiDragDrop-method-param' target='_blank' class='view-source'>view source</a></div><a href='#!/api/qrenderer.event.MultiDragDrop-method-param' class='name expandable'>param</a>( <span class='pre'>target, e</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Element<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});