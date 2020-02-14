Ext.data.JsonP.zrender_svg_SVGParser({"tagname":"class","name":"zrender.svg.SVGParser","autodetected":{},"files":[{"filename":"parseSVG.js","href":"parseSVG.html#zrender-svg-SVGParser"}],"docauthor":[{"tagname":"docauthor","name":"大漠穷秋 damoqiongqiu@126.com","email":null}],"members":[{"name":"makeViewBoxTransform","tagname":"method","owner":"zrender.svg.SVGParser","id":"method-makeViewBoxTransform","meta":{}},{"name":"parseSVG","tagname":"method","owner":"zrender.svg.SVGParser","id":"method-parseSVG","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-zrender.svg.SVGParser","short_doc":"This is a tool class for parsing SVG xml string to standard shape classes. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/parseSVG.html#zrender-svg-SVGParser' target='_blank'>parseSVG.js</a></div></pre><div class='doc-contents'><p>This is a tool class for parsing SVG xml string to standard shape classes.</p>\n\n<p>这是一个工具类，用来把 SVG 格式的 xml 解析成 graphic 包中定义的标准类。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-makeViewBoxTransform' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.SVGParser'>zrender.svg.SVGParser</span><br/><a href='source/parseSVG.html#zrender-svg-SVGParser-method-makeViewBoxTransform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.SVGParser-method-makeViewBoxTransform' class='name expandable'>makeViewBoxTransform</a>( <span class='pre'>viewBoxRect, width, height</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewBoxRect</span> : Array&lt;Number&gt;<div class='sub-desc'>\n</div></li><li><span class='pre'>width</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>{scale, position}</p>\n</div></li></ul></div></div></div><div id='method-parseSVG' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='zrender.svg.SVGParser'>zrender.svg.SVGParser</span><br/><a href='source/parseSVG.html#zrender-svg-SVGParser-method-parseSVG' target='_blank' class='view-source'>view source</a></div><a href='#!/api/zrender.svg.SVGParser-method-parseSVG' class='name expandable'>parseSVG</a>( <span class='pre'>xml, [opt]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xml</span> : string|XMLElement<div class='sub-desc'>\n</div></li><li><span class='pre'>opt</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>width</span> : Number (optional)<div class='sub-desc'><p>Default width if svg width not specified or is a percent value.</p>\n</div></li><li><span class='pre'>height</span> : Number (optional)<div class='sub-desc'><p>Default height if svg height not specified or is a percent value.</p>\n</div></li><li><span class='pre'>ignoreViewBox</span> : boolean (optional)<div class='sub-desc'>\n</div></li><li><span class='pre'>ignoreRootClip</span> : boolean (optional)<div class='sub-desc'>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>result:\n{\n    root: Group, The root of the the result tree of zrender shapes,\n    width: number, the viewport width of the SVG,\n    height: number, the viewport height of the SVG,\n    viewBoxRect: {x, y, width, height}, the declared viewBox rect of the SVG, if exists,\n    viewBoxTransform: the {scale, position} calculated by viewBox and viewport, is exists.\n}</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});