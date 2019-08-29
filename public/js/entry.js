/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three-stl-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/three-stl-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * @author aleeper / http://adamleeper.com/\n * @author mrdoob / http://mrdoob.com/\n * @author gero3 / https://github.com/gero3\n * @author Mugen87 / https://github.com/Mugen87\n *\n * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.\n *\n * Supports both binary and ASCII encoded files, with automatic detection of type.\n *\n * The loader returns a non-indexed buffer geometry.\n *\n * Limitations:\n *  Binary decoding supports \"Magics\" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).\n *  There is perhaps some question as to how valid it is to always assume little-endian-ness.\n *  ASCII decoding assumes file is UTF-8.\n *\n * Usage:\n *  var loader = new THREE.STLLoader();\n *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {\n *    scene.add( new THREE.Mesh( geometry ) );\n *  });\n *\n * For binary STLs geometry might contain colors for vertices. To use it:\n *  // use the same code to load STL as above\n *  if (geometry.hasColors) {\n *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });\n *  } else { .... }\n *  var mesh = new THREE.Mesh( geometry, material );\n */\n\n module.exports = function (THREE) {\n\n   var STLLoader = function ( manager ) {\n\n   \tthis.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;\n\n   };\n\n   STLLoader.prototype = {\n\n   \tconstructor: THREE.STLLoader,\n\n   \tload: function ( url, onLoad, onProgress, onError ) {\n\n   \t\tvar scope = this;\n\n   \t\tvar loader = new THREE.FileLoader( scope.manager );\n   \t\tloader.setResponseType( 'arraybuffer' );\n   \t\tloader.load( url, function ( text ) {\n\n   \t\t\tonLoad( scope.parse( text ) );\n\n   \t\t}, onProgress, onError );\n\n   \t},\n\n   \tparse: function ( data ) {\n\n   \t\tvar isBinary = function () {\n\n   \t\t\tvar expect, face_size, n_faces, reader;\n   \t\t\treader = new DataView( binData );\n   \t\t\tface_size = ( 32 / 8 * 3 ) + ( ( 32 / 8 * 3 ) * 3 ) + ( 16 / 8 );\n   \t\t\tn_faces = reader.getUint32( 80, true );\n   \t\t\texpect = 80 + ( 32 / 8 ) + ( n_faces * face_size );\n\n   \t\t\tif ( expect === reader.byteLength ) {\n\n   \t\t\t\treturn true;\n\n   \t\t\t}\n\n   \t\t\t// An ASCII STL data must begin with 'solid ' as the first six bytes.\n   \t\t\t// However, ASCII STLs lacking the SPACE after the 'd' are known to be\n   \t\t\t// plentiful.  So, check the first 5 bytes for 'solid'.\n\n   \t\t\t// US-ASCII ordinal values for 's', 'o', 'l', 'i', 'd'\n   \t\t\tvar solid = [ 115, 111, 108, 105, 100 ];\n\n   \t\t\tfor ( var i = 0; i < 5; i ++ ) {\n\n   \t\t\t\t// If solid[ i ] does not match the i-th byte, then it is not an\n   \t\t\t\t// ASCII STL; hence, it is binary and return true.\n\n   \t\t\t\tif ( solid[ i ] != reader.getUint8( i, false ) ) return true;\n\n    \t\t\t}\n\n   \t\t\t// First 5 bytes read \"solid\"; declare it to be an ASCII STL\n   \t\t\treturn false;\n\n   \t\t};\n\n   \t\tvar binData = this.ensureBinary( data );\n\n   \t\treturn isBinary() ? this.parseBinary( binData ) : this.parseASCII( this.ensureString( data ) );\n\n   \t},\n\n   \tparseBinary: function ( data ) {\n\n   \t\tvar reader = new DataView( data );\n   \t\tvar faces = reader.getUint32( 80, true );\n\n   \t\tvar r, g, b, hasColors = false, colors;\n   \t\tvar defaultR, defaultG, defaultB, alpha;\n\n   \t\t// process STL header\n   \t\t// check for default color in header (\"COLOR=rgba\" sequence).\n\n   \t\tfor ( var index = 0; index < 80 - 10; index ++ ) {\n\n   \t\t\tif ( ( reader.getUint32( index, false ) == 0x434F4C4F /*COLO*/ ) &&\n   \t\t\t\t( reader.getUint8( index + 4 ) == 0x52 /*'R'*/ ) &&\n   \t\t\t\t( reader.getUint8( index + 5 ) == 0x3D /*'='*/ ) ) {\n\n   \t\t\t\thasColors = true;\n   \t\t\t\tcolors = [];\n\n   \t\t\t\tdefaultR = reader.getUint8( index + 6 ) / 255;\n   \t\t\t\tdefaultG = reader.getUint8( index + 7 ) / 255;\n   \t\t\t\tdefaultB = reader.getUint8( index + 8 ) / 255;\n   \t\t\t\talpha = reader.getUint8( index + 9 ) / 255;\n\n   \t\t\t}\n\n   \t\t}\n\n   \t\tvar dataOffset = 84;\n   \t\tvar faceLength = 12 * 4 + 2;\n\n   \t\tvar geometry = new THREE.BufferGeometry();\n\n   \t\tvar vertices = [];\n   \t\tvar normals = [];\n\n   \t\tfor ( var face = 0; face < faces; face ++ ) {\n\n   \t\t\tvar start = dataOffset + face * faceLength;\n   \t\t\tvar normalX = reader.getFloat32( start, true );\n   \t\t\tvar normalY = reader.getFloat32( start + 4, true );\n   \t\t\tvar normalZ = reader.getFloat32( start + 8, true );\n\n   \t\t\tif ( hasColors ) {\n\n   \t\t\t\tvar packedColor = reader.getUint16( start + 48, true );\n\n   \t\t\t\tif ( ( packedColor & 0x8000 ) === 0 ) {\n\n   \t\t\t\t\t// facet has its own unique color\n\n   \t\t\t\t\tr = ( packedColor & 0x1F ) / 31;\n   \t\t\t\t\tg = ( ( packedColor >> 5 ) & 0x1F ) / 31;\n   \t\t\t\t\tb = ( ( packedColor >> 10 ) & 0x1F ) / 31;\n\n   \t\t\t\t} else {\n\n   \t\t\t\t\tr = defaultR;\n   \t\t\t\t\tg = defaultG;\n   \t\t\t\t\tb = defaultB;\n\n   \t\t\t\t}\n\n   \t\t\t}\n\n   \t\t\tfor ( var i = 1; i <= 3; i ++ ) {\n\n   \t\t\t\tvar vertexstart = start + i * 12;\n\n   \t\t\t\tvertices.push( reader.getFloat32( vertexstart, true ) );\n   \t\t\t\tvertices.push( reader.getFloat32( vertexstart + 4, true ) );\n   \t\t\t\tvertices.push( reader.getFloat32( vertexstart + 8, true ) );\n\n   \t\t\t\tnormals.push( normalX, normalY, normalZ );\n\n   \t\t\t\tif ( hasColors ) {\n\n   \t\t\t\t\tcolors.push( r, g, b );\n\n   \t\t\t\t}\n\n   \t\t\t}\n\n   \t\t}\n\n   \t\tgeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );\n   \t\tgeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ) );\n\n   \t\tif ( hasColors ) {\n\n   \t\t\tgeometry.addAttribute( 'color', new THREE.BufferAttribute( new Float32Array( colors ), 3 ) );\n   \t\t\tgeometry.hasColors = true;\n   \t\t\tgeometry.alpha = alpha;\n\n   \t\t}\n\n   \t\treturn geometry;\n\n   \t},\n\n   \tparseASCII: function ( data ) {\n\n   \t\tvar geometry, length, patternFace, patternNormal, patternVertex, result, text;\n   \t\tgeometry = new THREE.BufferGeometry();\n   \t\tpatternFace = /facet([\\s\\S]*?)endfacet/g;\n\n   \t\tvar vertices = [];\n   \t\tvar normals = [];\n\n   \t\tvar normal = new THREE.Vector3();\n\n   \t\twhile ( ( result = patternFace.exec( data ) ) !== null ) {\n\n   \t\t\ttext = result[ 0 ];\n   \t\t\tpatternNormal = /normal[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+/g;\n\n   \t\t\twhile ( ( result = patternNormal.exec( text ) ) !== null ) {\n\n   \t\t\t\tnormal.x = parseFloat( result[ 1 ] );\n   \t\t\t\tnormal.y = parseFloat( result[ 3 ] );\n   \t\t\t\tnormal.z = parseFloat( result[ 5 ] );\n\n   \t\t\t}\n\n   \t\t\tpatternVertex = /vertex[\\s]+([\\-+]?[0-9]+\\.?[0-9]*([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+[\\s]+([\\-+]?[0-9]*\\.?[0-9]+([eE][\\-+]?[0-9]+)?)+/g;\n\n   \t\t\twhile ( ( result = patternVertex.exec( text ) ) !== null ) {\n\n   \t\t\t\tvertices.push( parseFloat( result[ 1 ] ), parseFloat( result[ 3 ] ), parseFloat( result[ 5 ] ) );\n   \t\t\t\tnormals.push( normal.x, normal.y, normal.z );\n\n   \t\t\t}\n\n   \t\t}\n\n   \t\tgeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );\n   \t\tgeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ) );\n\n   \t\treturn geometry;\n\n   \t},\n\n   \tensureString: function ( buf ) {\n\n   \t\tif ( typeof buf !== \"string\" ) {\n\n   \t\t\tvar array_buffer = new Uint8Array( buf );\n   \t\t\tvar strArray = [];\n   \t\t\tfor ( var i = 0; i < buf.byteLength; i ++ ) {\n\n   \t\t\t\tstrArray.push(String.fromCharCode( array_buffer[ i ] )); // implicitly assumes little-endian\n\n   \t\t\t}\n   \t\t\treturn strArray.join('');\n\n   \t\t} else {\n\n   \t\t\treturn buf;\n\n   \t\t}\n\n   \t},\n\n   \tensureBinary: function ( buf ) {\n\n   \t\tif ( typeof buf === \"string\" ) {\n\n   \t\t\tvar array_buffer = new Uint8Array( buf.length );\n   \t\t\tfor ( var i = 0; i < buf.length; i ++ ) {\n\n   \t\t\t\tarray_buffer[ i ] = buf.charCodeAt( i ) & 0xff; // implicitly assumes little-endian\n\n   \t\t\t}\n   \t\t\treturn array_buffer.buffer || array_buffer;\n\n   \t\t} else {\n\n   \t\t\treturn buf;\n\n   \t\t}\n\n   \t}\n\n   }\n\n   return STLLoader\n }\n\n\n//# sourceURL=webpack:///./node_modules/three-stl-loader/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StereoCamera, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var SCSS_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! SCSS/index */ \"./src/scss/index.scss\");\n/* harmony import */ var SCSS_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(SCSS_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Components_Mountains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Mountains */ \"./src/js/components/Mountains.js\");\n// Stylesheets\n\n\nvar mountain = new Components_Mountains__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nmountain.init();\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/js/components/Mountains.js":
/*!****************************************!*\
  !*** ./src/js/components/Mountains.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar STLLoader = __webpack_require__(/*! three-stl-loader */ \"./node_modules/three-stl-loader/index.js\")(three__WEBPACK_IMPORTED_MODULE_0__);\n\nvar loader = new STLLoader();\n\nvar Mountains = function Mountains() {\n  var _this = this;\n\n  _classCallCheck(this, Mountains);\n\n  _defineProperty(this, \"animate\", function () {\n    // If Camera reaches end of the mountains then return it to the beginning\n    if (_this.camera.position.x < -26 && _this.camera.position.y > 2.7) {\n      _this.camera.position.set(32, -14.5, 3);\n    }\n\n    requestAnimationFrame(_this.animate);\n    _this.camera.position.x -= 0.01 * _this.settings.speed;\n    _this.camera.position.y += 0.00295 * _this.settings.speed;\n\n    _this.renderer.render(_this.scene, _this.camera);\n  });\n\n  _defineProperty(this, \"toggleAesthetic\", function () {\n    // Cycle through aesthetics\n    _this.settings.wireframe = _this.settings.wireframe >= 2 ? 0 : _this.settings.wireframe += 1; // Set the wireframe color\n\n    _this.scene.children[0].children[0].material.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](_this.colors[_this.settings.wireframe]); // Toggle the sun\n\n    _this.scene.children[1].visible = _this.settings.wireframe === 1;\n  });\n\n  _defineProperty(this, \"toggleSection\", function () {\n    _this.settings.section.classList.toggle('section--hidden');\n  });\n\n  _defineProperty(this, \"resizeCanvas\", function () {\n    _this.camera.aspect = window.innerWidth / window.innerHeight;\n\n    _this.camera.updateProjectionMatrix();\n\n    _this.renderer.setSize(window.innerWidth, window.innerHeight);\n  });\n\n  _defineProperty(this, \"init\", function () {\n    // On window resize resize the canvas\n    window.addEventListener('resize', _this.resizeCanvas, false); // On clicking the mountains toggle the information\n\n    _this.settings.element.addEventListener('click', _this.toggleSection, false); // Turn on A E S T H E T I C\n\n\n    window.addEventListener('keydown', _this.toggleAesthetic, false); // Add renderer to DOM\n\n    _this.renderer.setSize(window.innerWidth, window.innerHeight);\n\n    _this.renderer.setPixelRatio(window.devicePixelRatio);\n\n    _this.settings.element.appendChild(_this.renderer.domElement); // Position Camera\n\n\n    _this.camera.position.set(32, -14.5, 3);\n\n    _this.camera.rotation.x = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(53);\n    _this.camera.rotation.y = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(65);\n    _this.camera.rotation.z = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(35); // TODO: Can this be written using async/await\n\n    loader.load('./data/valles_marineris.stl', function (geometry) {\n      // Create the mountains\n      var mountains = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\n        color: _this.settings.background,\n        polygonOffset: true,\n        polygonOffsetFactor: 1,\n        polygonOffsetUnits: 1\n      })); // Create the wireframe\n\n      var wireframe = new three__WEBPACK_IMPORTED_MODULE_0__[\"LineSegments\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"WireframeGeometry\"](geometry), new three__WEBPACK_IMPORTED_MODULE_0__[\"LineBasicMaterial\"]({\n        color: _this.colors[_this.settings.wireframe]\n      }));\n      mountains.add(wireframe);\n\n      _this.scene.add(mountains); // Add a sun\n\n\n      var sun = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_0__[\"CircleGeometry\"](10, 32), new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({\n        color: 'rgb(237,245,63)'\n      }));\n      sun.rotation.x = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(90);\n      sun.rotation.y = three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].degToRad(90);\n      sun.position.set(-35, 5, 0);\n      sun.visible = false;\n\n      _this.scene.add(sun); // Render the initial scene\n\n\n      _this.renderer.render(_this.scene, _this.camera); // Fade in the mountains\n\n\n      _this.settings.element.classList.add('mountains--loaded');\n\n      _this.animate();\n    });\n  });\n\n  this.colors = ['rgb(235, 0, 41)', // red\n  'rgb(190,8,208)', // purple\n  'rgb(111, 195, 223)' // tron\n  ];\n  this.settings = {\n    aesthetic: false,\n    background: 'rgb(0,0,0)',\n    element: document.getElementById('js-mountains'),\n    section: document.getElementById('js-section'),\n    speed: 1,\n    wireframe: 0\n  };\n  this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n  this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](this.settings.background);\n  this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](75, window.innerWidth / window.innerHeight, 0.1, 1000);\n  this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mountains);\n\n//# sourceURL=webpack:///./src/js/components/Mountains.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"small\":\"540px\",\"medium\":\"920px\",\"large\":\"1400px\",\"xlarge\":\"2560px\"};\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });