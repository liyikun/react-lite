/*
  key/value configs
*/
const TRUE = true
const xlink = 'http://www.w3.org/1999/xlink'
const xml = 'http://www.w3.org/XML/1998/namespace'

export const SVGNamespaceURI = 'http://www.w3.org/2000/svg'

export const propAlias = {
    // svg attributes alias
    clipPath: 'clip-path',
    fillOpacity: 'fill-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strokeDasharray: 'stroke-dasharray',
    strokeLinecap: 'stroke-linecap',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    // DOM attributes alias
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    // DOM property alias
    autoComplete: 'autocomplete',
    autoFocus: 'autofocus',
    autoPlay: 'autoplay',
    autoSave: 'autosave',
    hrefLang: 'hreflang',
    radioGroup: 'radiogroup',
    spellCheck: 'spellcheck',
    srcDoc: 'srcdoc',
    srcSet: 'srcset'
}

export const attributesNS = {
    'xlink:actuate': xlink,
    'xlink:arcrole': xlink,
    'xlink:href': xlink,
    'xlink:role': xlink,
    'xlink:show': xlink,
    'xlink:title': xlink,
    'xlink:type': xlink,
    'xml:base': xml,
    'xml:lang': xml,
    'xml:space': xml
}

// those key must use be attributes
export const attrbutesConfigs = {
    clipPath: TRUE,
    cx: TRUE,
    cy: TRUE,
    d: TRUE,
    dx: TRUE,
    dy: TRUE,
    fill: TRUE,
    fillOpacity: TRUE,
    fontFamily: TRUE,
    fontSize: TRUE,
    fx: TRUE,
    fy: TRUE,
    gradientTransform: TRUE,
    gradientUnits: TRUE,
    markerEnd: TRUE,
    markerMid: TRUE,
    markerStart: TRUE,
    offset: TRUE,
    opacity: TRUE,
    patternContentUnits: TRUE,
    patternUnits: TRUE,
    points: TRUE,
    preserveAspectRatio: TRUE,
    r: TRUE,
    rx: TRUE,
    ry: TRUE,
    spreadMethod: TRUE,
    stopColor: TRUE,
    stopOpacity: TRUE,
    stroke: TRUE,
    strokeDasharray: TRUE,
    strokeLinecap: TRUE,
    strokeOpacity: TRUE,
    strokeWidth: TRUE,
    textAnchor: TRUE,
    transform: TRUE,
    version: TRUE,
    viewBox: TRUE,
    x1: TRUE,
    x2: TRUE,
    x: TRUE,
    xlinkActuate: TRUE,
    xlinkArcrole: TRUE,
    xlinkHref: TRUE,
    xlinkRole: TRUE,
    xlinkShow: TRUE,
    xlinkTitle: TRUE,
    xlinkType: TRUE,
    xmlBase: TRUE,
    xmlLang: TRUE,
    xmlSpace: TRUE,
    y1: TRUE,
    y2: TRUE,
    y: TRUE,

    /**
     * Standard Properties
     */
    allowFullScreen: TRUE,
    allowTransparency: TRUE,
    capture: TRUE,
    charSet: TRUE,
    challenge: TRUE,
    classID: TRUE,
    cols: TRUE,
    contextMenu: TRUE,
    dateTime: TRUE,
    disabled: TRUE,
    form: TRUE,
    formAction: TRUE,
    formEncType: TRUE,
    formMethod: TRUE,
    formTarget: TRUE,
    frameBorder: TRUE,
    height: TRUE,
    hidden: TRUE,
    inputMode: TRUE,
    is: TRUE,
    keyParams: TRUE,
    keyType: TRUE,
    list: TRUE,
    manifest: TRUE,
    maxLength: TRUE,
    media: TRUE,
    minLength: TRUE,
    nonce: TRUE,
    role: TRUE,
    rows: TRUE,
    seamless: TRUE,
    size: TRUE,
    sizes: TRUE,
    srcSet: TRUE,
    width: TRUE,
    wmode: TRUE,
    /**
     * RDFa Properties
     */
    about: TRUE,
    datatype: TRUE,
    inlist: TRUE,
    prefix: TRUE,
    // property is also supported for OpenGraph in meta tags.
    property: TRUE,
    resource: TRUE,
    typeof: TRUE,
    vocab: TRUE,
    /**
     * Non-standard Properties
     */
    // autoCapitalize and autoCorrect are supported in Mobile Safari for
    // keyboard hints.
    autoCapitalize: TRUE,
    autoCorrect: TRUE,
    // itemProp, itemScope, itemType are for
    // Microdata support. See http://schema.org/docs/gs.html
    itemProp: TRUE,
    itemScope: TRUE,
    itemType: TRUE,
    // itemID and itemRef are for Microdata support as well but
    // only specified in the the WHATWG spec document. See
    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
    itemID: TRUE,
    itemRef: TRUE,
    // IE-only attribute that specifies security restrictions on an iframe
    // as an alternative to the sandbox attribute on IE<10
    security: TRUE,
    // IE-only attribute that controls focus behavior
    unselectable: TRUE,
}

export const readOnlyProps = {
    nodeName: TRUE,
    nodeValue: TRUE,
    nodeType: TRUE,
    parentNode: TRUE,
    childNodes: TRUE,
    classList: TRUE,
    firstChild: TRUE,
    lastChild: TRUE,
    previousSibling: TRUE,
    previousElementSibling: TRUE,
    nextSibling: TRUE,
    nextElementSibling: TRUE,
    attributes: TRUE,
    ownerDocument: TRUE,
    namespaceURI: TRUE,
    localName: TRUE,
    baseURI: TRUE,
    prefix: TRUE,
    length: TRUE,
    specified: TRUE,
    tagName: TRUE,
    offsetTop: TRUE,
    offsetLeft: TRUE,
    offsetWidth: TRUE,
    offsetHeight: TRUE,
    offsetParent: TRUE,
    scrollWidth: TRUE,
    scrollHeight: TRUE,
    clientTop: TRUE,
    clientLeft: TRUE,
    clientWidth: TRUE,
    clientHeight: TRUE,
    x: TRUE,
    y: TRUE
}

export const isUnitlessNumber = {
    animationIterationCount: TRUE,
    boxFlex: TRUE,
    boxFlexGroup: TRUE,
    boxOrdinalGroup: TRUE,
    columnCount: TRUE,
    flex: TRUE,
    flexGrow: TRUE,
    flexPositive: TRUE,
    flexShrink: TRUE,
    flexNegative: TRUE,
    flexOrder: TRUE,
    fontWeight: TRUE,
    lineClamp: TRUE,
    lineHeight: TRUE,
    opacity: TRUE,
    order: TRUE,
    orphans: TRUE,
    tabSize: TRUE,
    widows: TRUE,
    zIndex: TRUE,
    zoom: TRUE,

    // SVG-related properties
    fillOpacity: TRUE,
    stopOpacity: TRUE,
    strokeDashoffset: TRUE,
    strokeOpacity: TRUE,
    strokeWidth: TRUE
}

export let ignoreKeys = {
    key: TRUE,
    ref: TRUE,
    children: TRUE
}

// use dom prop to compare new prop
export let shouldUseDOMProp = {
    value: TRUE,
    checked: TRUE
}

export let eventNameAlias = {
    onDoubleClick: 'ondblclick'
}

export let notBubbleEvents = {
    onmouseleave: TRUE,
    onmouseenter: TRUE,
    onload: TRUE,
    onunload: TRUE,
    onscroll: TRUE,
    onfocus: TRUE,
    onblur: TRUE,
    onrowexit: TRUE,
    onbeforeunload: TRUE,
    onstop: TRUE,
    ondragdrop: TRUE,
    ondragenter: TRUE,
    ondragexit: TRUE,
    ondraggesture: TRUE,
    ondragover: TRUE,
    oncontextmenu: TRUE,
    onpropertychange: TRUE
}