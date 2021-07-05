// Auto-generated from simulator. Do not edit.
declare namespace extraMath {
    //% block="convert $number to text"
    //% inlineInputMode=inline
    //% weight=99
    //% number.defl=0
    //% group="Conversion"
    //% help=extraMath/all
    /**
     * Convert any number to text
     */
    //% shim=extraMath::convert
    function convert(number: number): string;

    //% block="convert $angle to radians"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=95
    //% help=extraMath/all
    //% group="Conversion"
    /**
     * Convert an angle in degrees to an angle in radians
     * @param angle The angle in degrees
     */
    //% shim=extraMath::radians
    function radians(angle: number): number;

    //% block="convert $angle to degrees"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=94
    //% help=extraMath/all
    //% group="Conversion"
    /**
     * Convert an angle in degrees to an angle in degrees
     * @param angle The angle in degrees
     */
    //% shim=extraMath::degrees
    function degrees(angle: number): number;

    //% block="sin $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=93
    //% help=extraMath/all
    //% group="Trigonometry in Degrees"
    /**
     * Sine of angle in degrees
     * @param theta The angle in degrees
     */
    //% shim=extraMath::sin
    function sin(theta: number): number;

    //% block="cos $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=92
    //% help=extraMath/all
    //% group="Trigonometry in Degrees"
    /**
     * Cosine of angle in degrees
     * @param theta The angle in degrees
     */
    //% shim=extraMath::cos
    function cos(theta: number): number;

    //% block="tan $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=91
    //% help=extraMath/all
    //% group="Trigonometry in Degrees"
    /**
     * Tangent of angle in degrees
     * @param theta The angle in degrees
     */
    //% shim=extraMath::tan
    function tan(theta: number): number;

    //% block="arcsin $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=90
    //% help=extraMath/all
    //% group="Trigonometry in Degrees"
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for inverse sin
     */
    //% shim=extraMath::arcsin
    function arcsin(x: number): number;

    //% block="arccos $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=89
    //% help=extraMath/all
    //% group="Trigonometry in Degrees"
    /**
     * Inverse sine of angle in degrees
     * @param x cos
     */
    //% shim=extraMath::arccos
    function arccos(x: number): number;

    //% block="arctan $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=88
    //% help=extraMath/all
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for inverse tan
     */
    //% shim=extraMath::arctan
    function arctan(x: number): number;

    //% block="arctan2 $y $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% y.defl=0
    //% weight=87
    //% help=extraMath/all
    //% group="Trigonometry in Degrees"
    /**
     * Inverse sine of angle in degrees
     * @param x The "adjacent" operand for inverse tan
     * @param y The "opposite" operand for inverse tan
     */
    //% shim=extraMath::arctan2
    function arctan2(y: number, x: number): number;

    //% block="ln $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=86
    //% group="Logarithms"
    //% help=extraMath/all
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for the natural log
     */
    //% shim=extraMath::ln
    function ln(x: number): number;

    //% block="log $x base $base"
    //% inlineInputMode=inline
    //% x.defl=1
    //% base.defl=10
    //% weight=85
    //% help=extraMath/all
    //% group="Logarithms"
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for the log
     * @param base The base to take the logarithm with respect to
     */
    //% shim=extraMath::log
    function log(x: number, base: number): number;

    //% block="π"
    //% inlineInputMode=inline
    //% weight=84
    //% help=extraMath/all
    //% group="Constants"
    /**
     * The mathematical constant Pi, the circle constant.
     */
    //% shim=extraMath::Pi
    function Pi(): number;

    //% block="e"
    //% inlineInputMode=inline
    //% weight=83
    //% help=extraMath/all
    //% group="Constants"
    /**
     * The mathematical constant e, the exponential constant.
     */
    //% shim=extraMath::e
    function e(): number;

    //% block="ϕ"
    //% inlineInputMode=inline
    //% weight=82
    //% help=extraMath/all
    //% group="Constants"
    /**
     * The mathematical constant Phi, the golden ratio.
     */
    //% shim=extraMath::Phi
    function Phi(): number;

    //% block="√2"
    //% inlineInputMode=inline
    //% weight=81
    //% group="Constants"
    //% help=extraMath/all
    /**
     * The mathematical constant the square root of 2.
     */
    //% shim=extraMath::Sqrt2
    function Sqrt2(): number;

}
declare namespace shapes {
    //% blockId="main_axisPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_axisPicker
    function _axisPicker(axis: Axis): number;

    //% blockId="main_rotateAxisPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_rotateAxisPicker
    function _rotateAxisPicker(axis: RotateAxis): number;

    //% blockId=main_jsCadEditor block="$jscadScript"
    //% blockHidden=true
    //% shim=TD_ID
    //% jscadScript.fieldEditor="stlEditor" jscadScript.fieldOptions.decompileLiterals=true
    //% shim=shapes::fromJSCAD
    function fromJSCAD(jscadScript?: string): string;

    //% blockId="main_edgeStylePicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_edgeStylePicker
    function _edgeStylePicker(edgeStyle: EdgeStyle): number;

    //% blockId=chooseColor block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    //% shim=shapes::chooseColor
    function chooseColor(value: number): number;

    //% blockId=colorNumberPicker2 block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    //% shim=shapes::__colorNumberPicker2
    function __colorNumberPicker2(value: number): number;

    //% block="cube - width $width|depth $depth|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% help=shapes/cube
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=95
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * The cube, (or more technically a rectangular prism) allows you to make box like shapes. 
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::cube
    function cube(width: number, depth: number, height: number, color?: number): void;

    //% block="sphere - radius $radius || color $color=chooseColor|type $type|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=60
    //% faces.min=4
    //% faces.max=1000
    //% help=shapes/sphere
    //% type.defl=SphereType.geodesic
    //% weight=94
    //% expandableArgumentMode="toggle"
    //% group="3D Shapes"
    /**
     * Add a sphere 
     * @param radius The distance from the center to the edge of the sphere 
     * @param color The color to make the sphere
     * @param type Whether to use geodesic or icosahedron.  Geodesic is more triangular and has a golf-ball like appearance.
     * @param faces How many faces to use to make the sphere.  The more you use the longer it takes to render, so choose wisely!
     */
    //% shim=shapes::sphere
    function sphere(radius: number, color?: number, type?: SphereType, faces?: number): void;

    //% block="cylinder - radius $radius|height $height||$color=chooseColor|faces $faces|radius2 $radius2"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=60
    //% help=shapes/cylinder
    //% weight=90
    //% group="3D Shapes"
    /**
     * Add a cylinder
     * @param radius The radius (distance from center to edge) of the cylinder
     * @param height How tall to make the cylinder
     * @param color The color of the cylinder in hex (0xab1234)
     * @param faces The number of faces the cylinder has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     * @param radius2 If specified, make the bottom of the cylinder have a different size
     */
    //% shim=shapes::cylinder
    function cylinder(radius: number, height: number, color?: number, faces?: number, radius2?: number): void;

    //% block="donut - thickness $thickness|radius $radius||color $color=chooseColor|inner faces $innerFaces|outer faces $outerFaces|innerRotation $innerRotation"
    //% inlineInputMode=inline
    //% thickness.defl=4 thickness.min=1
    //% radius.defl=10
    //% innerFaces.defl=16
    //% outerFaces.defl=32
    //% innerRotation.defl=0
    //% help=shapes/donut
    //% weight=80
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add a donut (torus)
     * @param thickness How thick to make the donut
     * @param radius The radius of the donut
     * @param color Color (in hex 0xab12345)
     * @param innerFaces How many faces on the inside of the object
     * @param outerFaces How many faces on the outside of the object
     * @param innerRotation How far to turn the inside (useful if the number of inner faces is small)
     */
    //% shim=shapes::donut
    function donut(thickness: number, radius: number, color?: number, innerFaces?: number, outerFaces?: number, innerRotation?: number): void;

    //% block="tube - thickness $thickness|radius $radius|height $height||sides $sides | color $color=chooseColor"
    //% inlineInputMode=inline
    //% thickness.defl=1 thickness.min=1
    //% radius.defl=5
    //% height.defl=10
    //% sides.defl=60
    //% help=shapes/tube
    //% weight=81
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add a tube with a flat top and bottom
     * For non-circular tubes, lower the sides.
     * e.g. Set the sides to 6 to get hexagonal tubes! 
     * @param thickness How thick to make the walls of the tube
     * @param radius The radius of the tube
     * @param height The height of the tube
     * @param color Color (in hex 0xab12345)
     * @param sides How many sides on the object
     */
    //% shim=shapes::tube
    function tube(thickness: number, radius: number, height: number, sides?: number, color?: number): void;

    //% block="cone - radius $radius|height $height|| color $color=chooseColor| faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=100
    //% weight=75
    //% help=shapes/cone
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Make a cone like shape that is as tall as height.  The cone will be twice as wide as the radius. 
     * @param radius The radius of the cone
     * @param height How high to make the cone
     * @param color The color to use for the cone
     * @param faces The number of faces the cone has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     */
    //% shim=shapes::cone
    function cone(radius: number, height: number, color?: number, faces?: number): void;

    //% block="arc - radius $radius|height $height|startAngle $startAngle|endAngle $endAngle|| color $color=chooseColor| faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=60
    //% startAngle.defl=0
    //% endAngle.defl=30
    //% weight=60
    //% help=shapes/all
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Make an arc (pie chart piece) - from an starting angle to end angle
     * @param radius The radius of the circle
     * @param height The thickness of your pie slice 
     * @param startAngle The starting angle (in degrees)
     * @param endAngle The end angle (in degrees)
     * @param color The color of the pie slice
     * @param faces The resolution of the pie slice.  The more faces it has, the slower it will draw. 
     */
    //% shim=shapes::arc
    function arc(radius: number, height: number, startAngle: number, endAngle: number, color?: number, faces?: number): void;

    //% block="text - text $text | fontSize $fontSize | height $height ||color $color=chooseColor | line width $lineWidth |  letterSpacing $letterSpacing | lineSpacing $lineSpacing"
    //% inlineInputMode=inline
    //% lineWidth.defl=4
    //% fontSize.defl=21,
    //% lineSpacing.defl=1.4
    //% letterSpacing.defl=1
    //% text.defl="BuildBee"
    //% height.defl=4
    //% group="3D Shapes"
    //% help=shapes/text
    //% expandableArgumentMode="toggle"
    /**
     * Add text
     * @param text The text to add
     * @param lineWidth How thick to make the text
     * @param height How tall to extrude the text
     * @param color The color of the text
     */
    //% shim=shapes::text
    function text(text: string, fontSize?: number, height?: number, color?: number, lineWidth?: number, letterSpacing?: number, lineSpacing?: number): void;

    //% block="roof - width $width|depth $depth|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=93
    //% help=shapes/polygons
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
     * Add a triangular prism (roof)
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::triangleRoof
    function triangleRoof(width: number, height: number, depth: number, color?: number): void;

    //% block="ramp - width $width|depth $depth|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=92
    //% help=shapes/ramp
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
     * Add a triangular prism (ramp)
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::triangleRamp
    function triangleRamp(width: number, height: number, depth: number, color?: number): void;

    //% block="polygon - sides $sides|radius $radius|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% sides.defl=6
    //% sides.min=3
    //% help=shapes/polygons
    //% weight=80
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
     * Add a triangular prism (roof)
     * @param sides The width of the cube
     * @param radius The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::polygon3D
    function polygon3D(sides: number, radius: number, height: number, color?: number): void;

    //% blockId=load_stl 
    //% block="load 3D file $jscadScript" 
    //% topblock=false
    //% jscadScript.shadow=main_jsCadEditor
    //% handlerStatement=true
    //% weight=80
    //% help=shapes/file3D
    //% group="Files"
    //% shim=shapes::load3DFile
    function load3DFile(jscadScript?: string): void;

    /*
    'Penguin', 
    'Giraffe'
    }
    //% block="stamp animal||line width $lineWidth|height $height"
    //% inlineInputMode=inline
    //% lineWidth.defl=.5
    //% height.defl=10
    //% group="3D Shapes"
    export function animal(lineWidth?: number, height?: number) {
    board().requireImport('animals.makePenguin', animals.penguin)
    board().addStatement(`makePenguin(${lineWidth}, ${height})`);
    }
     */
    //% block="polyhedron from 3d points $points|triangles $triangles"
    //% points.defl="inner_shadow_block"
    //% polyhedron.shadow="lists_create_with"
    //% advanced=true
    //% group="Advanced 3D Shapes"
    /*   export function polyhedron(points: Array<any>): void {
    const pointsArrayStr = (points as any).toArray()
    board().requireImport('POLYHEDRON_SCRIPT', POLYHEDRON_SCRIPT)
    board().addStatement(`generatePolyhedron([${pointsArrayStr}])`);
    }
    const POLYHEDRON_SCRIPT =`
    function generatePolyhedron(points) {
    var polygons = [];
    for (let i = 0; i < points.length; i++) {
    if (points[i] && points[i].length > 2) {
    const x = points[i][0]
    const y = points[i][1]
    const z = points[i][2]
    polygons.push(new CSG.Vertex(new CSG.Vector3D(x,y,z)));
    }
    }
    // add more polygons and finally:
    return CSG.fromPolygons(polygons);
    }
    `*/
    /*
    //% block="draw 3d lines with width $width|height $height|closed $closed|from 2d points $points"
    //% width.defl=10
    //% height.defl=10
    //% closed.defl=true
    //% points.defl="inner_shadow_block"
    //% linePath.shadow="lists_create_with"
    //% advanced=true
    //% group="Advanced 3D Shapes"
    export function drawLinePath(width: number, height: number, closed: boolean, points: string[]): void {
    const pointsArrayStr = (points as any).toArray()
    board().addStatement(`rectangular_extrude([${pointsArrayStr}], {w: ${width}, h: ${height}, closed: ${closed}})`);
    }*/
    //% block="circle (2d) - radius $radius"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    //% shim=shapes::circle
    function circle(radius: number): void;

    //% blockId=add_rect block="rect (2d) - width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% height.defl=20
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    //% shim=shapes::rect
    function rect(width: number, height: number): void;

    //% blockId=regular_polygon block="regular polygon (2d) - sides $sides|radius $radius"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% sides.defl=6
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    /**
     * regular polygon
     * @param sides the number of sides to make
     * @param radius the distance from the center
     */
    //% shim=shapes::regularPolygon
    function regularPolygon(sides: number, radius: number): void;

    //% blockId=point3d block="3D point x: $x|y:  $y|z:  $z"
    //% inlineInputMode=inline
    //% x.defl=50
    //% y.defl=50
    //% z.defl=50
    //% group="Points"
    //% advanced=true
    //% shim=shapes::point3d
    function point3d(x: number, y: number, z: number): string;

    //% blockId=point2d block="2D point x: $x|y:  $y"
    //% inlineInputMode=inline
    //% x.defl=50
    //% y.defl=50
    //% group="Points"
    //% advanced=true
    //% shim=shapes::point2d
    function point2d(x: number, y: number): string;

    //% blockId="main_polyhedraPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_polyhedraPicker
    function _polyhedraPicker(polyhedra: Polyhedra): number;

    //% blockId=polyhedra block="polyhedron type: $polyhedron=main_polyhedraPicker with radius: $radius mm ||color $color=chooseColor" 
    //% topblock=false
    //% handlerStatement=true
    //% radius.defl=5
    //% help=shapes/polyhedron
    //% group="More Shapes"
    //% advanced=false
    //% inlineInputMode=inline
    /**
     * Creates a polyhedron
     * @param radius the radius to use
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::polyhedron
    function polyhedron(polyhedron: Polyhedra, radius: number, color?: number): void;

}
declare namespace operators {
    /**
     * move shapes in mm in axis
     * @param mm how far to move across the axis
     * @param axis which axis to use
     * @param body the shapes to move across
     */
    //% blockId=move block="move $mm mm $direction=main_axisPicker" 
    //% topblock=false
    //% mm.defl=10
    //% handlerStatement=true
    //% help=operators/move
    //% group="Position"
    //% weight=82
    //% shim=operators::moveAsync promise
    function move(mm: number, direction: Axis, body: () => void): void;

    //% blockId=setPoition block="set position to x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/set-position
    //% group="Position"
    //% x.defl=0
    //% y.defl=0
    //% z.defl=0
    /**
     * Move all shapes to lie on the XY Plane at Z = 0. A Great last thing to check before 3D Printing.
     * @param x the x position to move shapes to
     * @param y the y position to move shapes to
     * @param z the z position to move shapes to
     * @param body the shapes to move up
     */
    //% shim=operators::setPositionAsync promise
    function setPosition(x: number, y: number, z: number, body: () => void): void;

    //% blockId=stackshapes block="stack shapes|$direction|axis: $axis" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/stack-shapes
    //% direction.defl=StackDirection.Above
    //% axis.defl=Axis.Z
    //% group="Layout"
    /**
     * move shapes up the z axis
     * @param direction the direction to stack
     * @param axis the axis to stack in
     * @param body the shapes to move up
     */
    //% shim=operators::stackAsync promise
    function stack(direction: StackDirection, axis: Axis, body: () => void): void;

    //% blockId=trim_edges block="style edges: $edgeStyle=main_edgeStylePicker | sides: $direction | with radius: $radius mm" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/style-edges
    //% axis.defl=3
    //% radius.defl=2
    //% group="Edges"
    /**
     * Either chamfers or fillets the edges in the Z axis
     * @param direction the direction to stack
     * @param radius the radius to use
     * @param body the shapes to move up
     */
    //% shim=operators::styleEdgesAsync promise
    function styleEdges(edgeStyle: EdgeStyle, direction: StyleEdgeDirection, radius: number, body: () => void): void;

    //% blockId=placeOnGround block="place on ground" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/place-on-ground
    //% group="Layout"
    /**
     * Take all shapes inside this block and move them as a group so that they are on the ground.
     * @param body the shapes to move
     */
    //% shim=operators::placeOnGroundAsync promise
    function placeOnGround(body: () => void): void;

    //% blockId=makehollow block="hollow shapes: $wallThickness mm walls | with $insideRound mm radius" 
    //% topblock=false
    //% help=operators/hollow-shapes
    //% handlerStatement=true
    //% wallThickness.defl=2
    //% wallThickness.min=1
    //% insideRound.defl=1
    //% insideRound.min=0
    //% group="Edges"
    /**
     * Hollows out a part
     * @param wallThickness how thick to make the walls
     * @param insideRound the radius to use on the inside
     * @param body the shapes to move up
     */
    //% shim=operators::hollowShapesAsync promise
    function hollowShapes(wallThickness: number, insideRound: number, body: () => void): void;

    //% blockId=move_shapes block="translate shapes x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/translate
    //% group="Position and Size"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How far to move across in x
     * @param y How far to move over in y
     * @param z How far to move up in z
     * @param body The list of shapes to move
     */
    //% shim=operators::translateShapesAsync promise
    function translateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=scale_shapes block="scale shapes x: $x|  y: $y |  z: $z" 
    //% x.defl=1
    //% y.defl=1
    //% z.defl=1
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/scale
    //% group="Position and Size"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How much to scale in x
     * @param y How much to scale in y
     * @param z How much to scale in z
     * @param body The list of shapes to move
     */
    //% shim=operators::scaleShapesAsync promise
    function scaleShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=enlarge_shapes block="enlarge shapes x: $x|  y: $y |  z: $z" 
    //% x.defl=2
    //% y.defl=2
    //% z.defl=2
    //% help=operators/enlarge
    //% topblock=false
    //% handlerStatement=true
    //% group="Position and Size"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How much to enlarge in x
     * @param y How much to enlarge in y
     * @param z How much to enlarge in z
     * @param body The list of shapes to enlarge
     */
    //% shim=operators::enlargeShapesAsync promise
    function enlargeShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=main_protractor360 block="$angle"
    //% blockHidden=true
    //% shim=TD_ID
    //% angle.fieldEditor="protractor360" angle.fieldOptions.decompileLiterals=true
    //% shim=operators::chooseDegrees
    function chooseDegrees(angle: number): number;

    //% blockId=flip_shapes 
    //% block="turn $angle ° | $axis=main_rotateAxisPicker" 
    //% topblock=false
    //% handlerStatement=true
    //% angle.shadow=main_protractor360
    //% angle.defl=45
    //% axis.defl=2
    //% weight=80
    //% help=operators/turn
    //% group="Position"
    /**
     * Flip along the X axis
     * @param x the amount, in degrees to rotate
     * @param body the shapes to rotate
     */
    //% shim=operators::turnAsync promise
    function turn(angle: number, axis: RotateAxis, body: () => void): void;

    //% blockId=rotate_shapes block="rotate shapes x°: $x|  y°: $y | z°: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/rotate
    //% group="Rotation"
    //% advanced=true
    /**
     * Perform a rotation in X, Y and Z axis
     * @param x Rotation in X, degrees
     * @param y Rotation in X, degrees
     * @param z Rotation in X, degrees
     * @param body The shapes to rotate
     */
    //% shim=operators::rotateShapesAsync promise
    function rotateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/add-shapes
    //% group="Operations"
    /**
     * Add shapes together. Sometimes called "union".
     * @param body List of shapes to add
     */
    //% shim=operators::addShapesAsync promise
    function addShapes(body: () => void): void;

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/subtract-shapes
    //% group="Operations"
    /**
     * Cut shapes away from the first shape in the list.  Sometimes called "difference"
     * @param body List of shapes to subtract
     */
    //% shim=operators::subtractShapesAsync promise
    function subtractShapes(body: () => void): void;

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/intersect-shapes
    //% group="Operations"
    /**
     * Intersect shapes - only leave the parts from all shapes that overlap.
     * @param body List of shapes to intersect
     */
    //% shim=operators::intersectShapesAsync promise
    function intersectShapes(body: () => void): void;

    //% blockId=wrap_shapes block="wrap shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/wrap-shapes
    //% group="Operations"
    /**
     * Wrap shapes - cover all the shapes, leaving only the outermost edges.  Sometimes called "quick hull" or "convex hull".
     * @param body List of shapes to intersect
     */
    //% shim=operators::wrapShapesAsync promise
    function wrapShapes(body: () => void): void;

    //% blockId=rotateExtrude2dshapes block="rotate extrude 2d shape from angle $startAngle | to $stopAngle | faces $faces" 
    //% startAngle.defl=0
    //% startAngle.min=0
    //% startAngle.max=360
    //% stopAngle.min=0
    //% stopAngle.max=360
    //% stopAngle.defl=360
    //% faces.defl=32
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrinkwrapping technique to join them together.  Also known as hull.
     * @param body List of 2D shapes to shrink wrap
     */
    //% shim=operators::rotateExtrudeAsync promise
    function rotateExtrude(startAngle: number, stopAngle: number, faces: number, body: () => void): void;

    //% blockId=linearExtrude2dshapes block="linear extrude 2d shape to height: $height | twist: $twist | slices: $slices" 
    //% height.defl=10
    //% twist.defl=0
    //% twist.min=0
    //% twist.max=360
    //% slices.defl=50
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% help=operators/linear-extrude
    //% advanced=true
    /**
     * Give a 2D shape height, optionally twist it
     * @param height The height of the extrusion
     * @param twist The angle to twist the extrusion
     * @param slices Defines resolution of the twist
     * @param body 
     */
    //% shim=operators::linearExtrudeAsync promise
    function linearExtrude(height: number, twist: number, slices: number, body: () => void): void;

    //% blockId=wrap2dshapes block="wrap 2d shapes (hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrinkwrapping technique to join them together.  Also known as hull.
     * @param body List of 2D shapes to shrink wrap
     */
    //% shim=operators::wrap2DShapesAsync promise
    function wrap2DShapes(body: () => void): void;

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrink wrapping function one at a time to get a progressive effect.  Also known as "chain hull"
     * @param body The list of 2d shapes to sequentially shrink wrap
     */
    //% shim=operators::sequentialWrap2DShapesAsync promise
    function sequentialWrap2DShapes(body: () => void): void;

}
declare namespace parameters {
    //% block="text - label: $parameterName || default: $defaultText | characterLimit: $characterLimit"
    //% inlineInputMode=inline
    //% parameterName.defl="textInput"
    //% defaultText.defl="text"
    //% characterLimit.defl=0
    //% characterLimit.min=0
    //% group="Text"
    //% expandableArgumentMode="toggle"
    /**
     * Add text input parameter
     * @param parameterName The label for text input field
     * @param defaultText The default text for the text input field
     * @param characterLimit The character limit to apply to the text input. (0 means no limit)
     */
    //% shim=parameters::textParameter
    function textParameter(parameterName: string, defaultText?: string, characterLimit?: number): string;

    //% block="number - label: $parameterName || default: $defaultValue"
    //% inlineInputMode=inline
    //% parameterName.defl="numberInput"
    //% defaultValue.defl="0"
    //% group="Numbers"
    //% expandableArgumentMode="toggle"
    /**
     * Add text input parameter
     * @param parameterName The label for number input field
     * @param defaultValue The default value for the number input field
     */
    //% shim=parameters::numberParameter
    function numberParameter(parameterName: string, defaultValue?: number): number;

    //% block="range - label: $parameterName || default: $defaultValue | min: $minValue | max: $maxValue | step: $stepValue"
    //% inlineInputMode=inline
    //% parameterName.defl="rangeInput"
    //% defaultValue.defl="0"
    //% minValue.defl="0"
    //% maxValue.defl="10"
    //% stepValue.defl="1"
    //% group="Numbers"
    //% expandableArgumentMode="toggle"
    /**
     * Add text input parameter
     * @param parameterName The label for slider
     * @param defaultValue The default text for the text input field
     * @param minValue The minimum value of the slider
     * @param maxValue The maximum value of the slider
     * @param stepValue The default value of the slider
     */
    //% shim=parameters::numberRangeParameter
    function numberRangeParameter(parameterName: string, defaultValue?: number, minValue?: number, maxValue?: number, stepValue?: number): number;

}
declare namespace colors {
    //% blockId=color_block block="color $color=colorsChooseColor" 
    //% group="Colors"
    //% topblock=false
    //% help=colors/all
    //% handlerStatement=true
    //% weight=80
    /**
     * set the shapes inside this block to a particular color
     * @param color - color to set e.g. 0xc0c0c0
     */
    //% shim=colors::colorAsync promise
    function color(color: number, body: () => void): void;

    //% blockId=randomColor block="random color"
    //% inlineInputMode=inline
    //% help=colors/all
    //% group="Colors"
    //% advanced=false
    //% weight=90
    //% shim=colors::randomColor
    function randomColor(): number;

    //% blockId=rainbowColor block="rainbow color: $rainbowColor || color wheel increment: $colorWheelDegrees °"
    //% inlineInputMode=inline
    //% help=colors/rainbow
    //% rainbowColor.defl=0
    //% colorWheelDegrees.defl=20
    //% group="Colors"
    //% advanced=false
    /**
     * Use rainbow color in order to go through all the colors of the rainbow in order.
     * Very handy to use inside of a for loop.
     * @param rainbowColor - what index of the rainbow to use.
     * @param colorWheelDegrees - how many degrees to skip across the color wheel.  
     * By default this is set to 20 degrees, so the hues picked will be every 20 degrees on the color wheel.
     */
    //% weight=100
    //% shim=colors::rainbowColor
    function rainbowColor(rainbowColor: number, colorWheelDegrees?: number): number;

    /**
     * Kelvin is a temperature unit which is often used as a measure of the colour temperature of light sources. 
     * Black bodies at temperatures below about 4000 K appear reddish, whereas those above about 7500 K appear bluish. 
     * @param kelvinDegrees 
     */
    //% blockId=colorTemperature block="color temperature: $kelvinDegrees ° Kelvin"
    //% inlineInputMode=inline
    //% kelvinDegrees.defl=3500
    //% kelvinDegrees.min=0
    //% kelvinDegrees.max=10000
    //% help=colors/all
    //% group="Colors"
    //% advanced=false
    //% shim=colors::colorTemperature
    function colorTemperature(kelvinDegrees: number): number;

    /**
     * Color scale helps you go between two colors incrementally. 
     * Pick a starting color and an ending color, then choose how many colors you want in your scale.
     * Use the colorIndex to choose which color to use. 
     * 
     * The idea is you can go fromColor red toColor purple, and say there are 6 colors you will use.
     * You can then draw each shape with a different color index to get a variation in colors along the scale. 
     * 
     * @param fromColor the starting color in your scale
     * @param toColor the ending color in your scale
     * @param colorIndex which color you want 
     * @param numColors how many total colors there are in your scale
     */
    //% blockId=colorScale block="color scale from: $fromColor=colorsChooseColor to: $toColor=colorsChooseColor colorIndex: $colorIndex || numColors: $numColors"
    //% inlineInputMode=inline
    //% fromColor.defl=0x4ebed7
    //% toColor.defl=0x6B3FA0
    //% colorIndex.defl=0
    //% numColors.defl=6
    //% expandableArgumentMode="enabled" 
    //% help=colors/all
    //% group="Colors"
    //% advanced=false
    //% shim=colors::colorScale
    function colorScale(fromColor: number, toColor: number, colorIndex: number, numColors?: number): number;

    //% blockId=convertFromHex block="convert from hex: $hex"
    //% inlineInputMode=inline
    //% hex.defl="#ED0A3F"
    //% help=colors/all
    //% group="Converters"
    //% advanced=false
    /**
     * use a color from a web (hex) value.  e.g. #c0c0c0
     * @param hex hex value
     */
    //% shim=colors::convertFromHex
    function convertFromHex(hex: string): number;

    //% blockId=convertFromRGB block="convert from red: $red green: $green blue $blue (RGB)"
    //% inlineInputMode=inline
    //% red.defl=0xFF
    //% green.defl=0x00
    //% blue.defl=0x00
    //% group="Converters"
    //% advanced=false
    //% help=colors/all
    /**
     * Use a color from a rgb value.  
     * @param red red value
     * @param green green value
     * @param blue blue value
     */
    //% shim=colors::convertFromRGB
    function convertFromRGB(red: number, green: number, blue: number): number;

    //% blockId=convertFromHSL block="convert from hue: $hue saturation: $saturation lightness $lightness (HSL)"
    //% inlineInputMode=inline
    //% hue.defl=0
    //% hue.min=0
    //% hue.max=360
    //% saturation.defl=0.5
    //% lightness.defl=0.5
    //% group="Converters"
    //% advanced=false
    /**
     * Use a color from an HSL (hue, saturation, and lightness) value.  Using HSL is handy when trying to pick colors from the rainbow, or colors that are similar, but one is darker than the other.
     * @param hue the color of the rainbow, represented by an angle on the color wheel - 0 to 360
     * @param saturation the amount of grey added to the color, on a scale of 0 to 1
     * @param lightness the amount of light (white) added to the color, on a scale of 0 to 1
     * 
     */
    //% shim=colors::convertFromHSL
    function convertFromHSL(hue: number, saturation: number, lightness: number): number;

    //% blockId=colorsChooseColor block="%value"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    //% shim=TD_ID
    /**
     * choose a color from a number
     * @param value the hex number
     */
    //% shim=colors::choose
    function choose(value: number): number;

}
declare namespace fasteners {
    //% blockId=softDrinkBottle block="soft drink bottle - $threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/softDrinkBottleThread
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% weight=80
    //% expandableArgumentMode="enabled"
    /**
     * Make a thread compatible with a PET soda bottle.  To cut threads into a shape, subtract the "thread cutting tap" from another shape.
     * @param threadType choose between the screw thread or the lid interior thread
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::softDrinkBottleThread
    function softDrinkBottleThread(threadType: ThreadShapeType, height: number, lead?: number, resolution?: number): void;

    //% blockId=britishStandardThread block="british standard - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/britishStandardThread
    //% size.defl=BritishSizes.G_OneSixteenthInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=70
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * British Standard Pipe (BSP) is a set of technical standards for screw threads that has been adopted internationally for interconnecting and sealing pipes and fittings by mating an external (male) thread with an internal (female) thread. It has been adopted as standard in plumbing and pipe fitting, except in North America, where NPT and related threads are used. 
     * Source: Wikipedia
     * To cut threads into a shape, subtract the "thread cutting tap" from another shape.
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::britishStandardThread
    function britishStandardThread(threadType: ThreadShapeType, size: BritishSizes, height: number, lead?: number, resolution?: number): void;

    //% blockId=metricCoarseThread block="metric coarse - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% size.defl=MetricCoarseSizes.M8x1
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=60
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * Metric screws (ISO metric screw thread) the most commonly used type of general-purpose screw threads.
     * The "M" stands for the outer diameter of the screw thread, in mm. 
     * 
     * Coarse threads have a larger pitch (distance between the thread ridges), and are preferred for most applications.
     * Use fine threads when you need to add strength or need to prevent loosening.
     *
     * To cut into a tube, divide the M number by 2.  This gives you the outer radius of the thread. 
     * Your tube will need to be larger than that.  For starters, try a tube of size M/2 + 1, then adjust as necessary.
     *
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::metricCoarseThread
    function metricCoarseThread(threadType: ThreadShapeType, size: MetricCoarseSizes, height: number, lead?: number, resolution?: number): void;

    //% blockId=metricFineThread block="metric fine - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/metricFineThread
    //% size.defl=MetricFineSizes.M10x1
    //% height.defl=10
    //% lead.defl=20
    //% weight=50
    //% resolution.defl=120
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * Metric screws (ISO metric screw thread) the most commonly used type of general-purpose screw threads.
     * The "M" stands for the outer diameter of the screw thread, in mm. 
     * 
     * Coarse threads have a larger pitch (distance between the thread ridges), and are preferred for most applications.
     * Use fine threads when you need to add strength or need to prevent loosening.
     * 
     * To cut into a tube, divide the M number by 2.  This gives you the outer radius of the thread. 
     * Your tube will need to be larger than that.  For starters, try a tube of size M/2 + 1, then adjust as necessary.
     * 
     * @param thread the type of thread you want
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::metricFineThread
    function metricFineThread(threadType: ThreadShapeType, size: MetricFineSizes, height: number, lead?: number, resolution?: number): void;

    //% blockId=unifiedCoarseThread block="unified coarse - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% size.defl=UnifiedCoarseSizes.UNC_HalfInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=40
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::unifiedCoarseThread
    function unifiedCoarseThread(threadType: ThreadShapeType, size: UnifiedCoarseSizes, height: number, lead?: number, resolution?: number): void;

    //% blockId=unifiedFineThread block="unified fine - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% size.defl=UnifiedFineSizes.UNF_HalfInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=30
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::unifiedFineThread
    function unifiedFineThread(threadType: ThreadShapeType, size: UnifiedFineSizes, height: number, lead?: number, resolution?: number): void;

    //% blockId=unifiedExtraFineThread block="unified extra fine - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% size.defl=UnifiedExtraFineSizes.UNEF_OneQuarterInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=20
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::unifiedExtraFineThread
    function unifiedExtraFineThread(threadType: ThreadShapeType, size: UnifiedExtraFineSizes, height: number, lead?: number, resolution?: number): void;

    //% blockId=unifiedNumberedThread block="unified numbered - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% size.defl=UnifiedNumberedSizes.UN_32
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=10
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::unifiedNumberedThread
    function unifiedNumberedThread(threadType: ThreadShapeType, size: UnifiedNumberedSizes, height: number, lead?: number, resolution?: number): void;

    /*
    //% blockId=threadProfile block="thread profile | pitch $pitch | rRotation $rRotation | dSupport $dSupport | profile $sectionProfile" 
    //% shim=TD_ID
    //% group="Sizes"
    //% pitch.defl=2.7
    //% rRotation.defl=11.52381
    //% dSupport.defl=24.2
    //% sectionProfile.defl="[[0, -0.987894698],[0, 0.987894698],[2.17619, 0.604173686],[2.17619, -0.195826314]]"
    //% weight=10
    export function threadProfile(pitch: number, rRotation: number, dSupport: number, sectionProfile: string){
    const sectionProfileArr =  JSON.parse(sectionProfile);
    return JSON.stringify({
    pitch,
    rRotation,
    dSupport,
    sectionProfile: sectionProfileArr,
    isCustomProfile: true
    })
    }
     */
    //% blockId=thread block="thread - $thread|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/thread
    //% thread.defl="bottle"
    //% height.defl=20
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    //% weight=9
    /**
     * Make a cylinder with an external thread
     * @param thread the type of thread you want
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::thread
    function thread(thread: string, height: number, lead?: number, resolution?: number): void;

    //% blockId=threadCuttingTap block="thread cutting tap - $thread|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/threadCuttingTap
    //% thread.defl="bottle"
    //% height.defl=20
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% weight=8
    //% expandableArgumentMode="enabled"
    /**
     * Make a cylinder with an external thread
     * @param thread the type of thread you want
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    //% shim=fasteners::threadCuttingTap
    function threadCuttingTap(thread: string, height: number, lead?: number, resolution?: number): void;

}

// Auto-generated. Do not edit. Really.
