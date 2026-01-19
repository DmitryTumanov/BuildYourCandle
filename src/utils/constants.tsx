import {CandleItemType, ColorType} from "../store/types";

export const MAIN_CANDLE_TYPE = 'MAIN_CANDLE';

export const BUILDER_PAGE = 'BUILDER_PAGE';
export const ITEM_CREATION_STAGE_1_PAGE = 'ITEM_CREATION_STAGE_1_PAGE';
export const ITEM_CREATION_STAGE_2_PAGE = 'ITEM_CREATION_STAGE_2_PAGE';
export const ITEM_CREATION_PAGES = [ITEM_CREATION_STAGE_1_PAGE, ITEM_CREATION_STAGE_2_PAGE];

export const CANDLE_ITEM_TYPES: CandleItemType[] = [
    {
        name: 'ARC_CANDLE_ITEM_TYPE',
        label: 'Arc',
        file: "models/arc.glb",
        svgFile: "svg/arc.svg",
        weight: 1,
        height: 0.419392891228199,
        flippable: true
    },
    {
        name: 'BIG_CYLINDER_CANDLE_ITEM_TYPE',
        label: 'Big Cylinder',
        file: "models/big_cylinder.glb",
        svgFile: "svg/big_cylinder.svg",
        weight: 1,
        height: 0.25,
        flippable: false
    },
    {
        name: 'CYLINDER_CANDLE_ITEM_TYPE',
        label: 'Cylinder',
        file: "models/cylinder.glb",
        svgFile: "svg/cylinder.svg",
        weight: 1,
        height: 0.30000001192092896,
        flippable: false
    },
    {
        name: 'FLOWER_CANDLE_ITEM_TYPE',
        label: 'Flower',
        file: "models/flower.glb",
        svgFile: "svg/flower.svg",
        weight: 1,
        height: 0.1800002008676529,
        flippable: false
    },
    {
        name: 'GEAR_CANDLE_ITEM_TYPE',
        label: 'Gear',
        file: "models/gear.glb",
        svgFile: "svg/gear.svg",
        weight: 1,
        height: 0.17000000178813934,
        flippable: false
    },
    {
        name: 'HEMISPHERE_CANDLE_ITEM_TYPE',
        label: 'Hemisphere',
        file: "models/hemisphere.glb",
        svgFile: "svg/hemisphere.svg",
        weight: 1,
        height: 0.25775769352912903,
        flippable: true
    },
    {
        name: 'RIBBED_CYLINDER_CANDLE_ITEM_TYPE',
        label: 'Ribbed Cylinder',
        file: "models/ribbed_cylinder.glb",
        svgFile: "svg/ribbed_cylinder.svg",
        weight: 1,
        height: 0.46000003814697266,
        flippable: false
    },
    {
        name: 'RIBBED_FRUSTUM_CANDLE_ITEM_TYPE',
        label: 'Ribbed Frustum',
        file: "models/ribbed_frustum.glb",
        svgFile: "svg/ribbed_frustum.svg",
        weight: 1,
        height: 0.33000001311302185,
        flippable: false
    },
    {
        name: 'RIBBED_HEMISPHERE_CANDLE_ITEM_TYPE',
        label: 'Ribbed Hemisphere',
        file: "models/ribbed_hemisphere.glb",
        svgFile: "svg/ribbed_hemisphere.svg",
        weight: 1,
        height: 0.25999999046325684,
        flippable: true
    },
    {
        name: 'RIBBED_SPHERE_CANDLE_ITEM_TYPE',
        label: 'Ribbed Sphere',
        file: "models/ribbed_sphere.glb",
        svgFile: "svg/ribbed_sphere.svg",
        weight: 1,
        height: 0.3700000047683716,
        flippable: false
    },
    {
        name: 'RIBBED_SQUARE_CANDLE_ITEM_TYPE',
        label: 'Ribbed Square',
        file: "models/ribbed_square.glb",
        svgFile: "svg/ribbed_square.svg",
        weight: 1,
        height: 0.14000000059604645,
        flippable: false
    },
    {
        name: 'RING_CANDLE_ITEM_TYPE',
        label: 'Ring',
        file: "models/ring.glb",
        svgFile: "svg/ring.svg",
        weight: 1,
        height: 0.157274067401886,
        flippable: false
    },
    {
        name: 'SMALL_CYLINDER_CANDLE_ITEM_TYPE',
        label: 'Small Cylinder',
        file: "models/small_cylinder.glb",
        svgFile: "svg/small_cylinder.svg",
        weight: 1,
        height: 0.2199999988079071,
        flippable: false
    },
    {
        name: 'SPHERE_CANDLE_ITEM_TYPE',
        label: 'Sphere',
        file: "models/sphere.glb",
        svgFile: "svg/sphere.svg",
        weight: 1,
        height: 0.33000001311302185,
        flippable: false
    },
    {
        name: 'UFO_CANDLE_ITEM_TYPE',
        label: 'Ufo',
        file: "models/ufo.glb",
        svgFile: "svg/ufo.svg",
        weight: 1,
        height: 0.25999999046325684,
        flippable: false
    },
    {
        name: 'VOLUMETRIC_FLOWER_CANDLE_ITEM_TYPE',
        label: 'Volumetric Flower',
        file: "models/volumetric_flower.glb",
        svgFile: "svg/volumetric_flower.svg",
        weight: 1,
        height: 0.24048493057489395,
        flippable: false
    }
];

export const COLORS_CONFIG: ColorType[] = [
    {
        name: 'RED',
        color: '#CF3B5E',
        backgroundColor: 'rgba(207, 59, 94, 0.2)'
    },
    {
        name: 'RED ORANGE',
        color: '#E53E4A',
        backgroundColor: 'rgba(229, 62, 74, 0.2)'
    },
    {
        name: 'ORANGE',
        color: '#E25601',
        backgroundColor: 'rgba(226, 86, 1, 0.2)'
    },
    {
        name: 'YELLOW',
        color: '#E5B330',
        backgroundColor: 'rgba(229, 179, 48, 0.2)'
    },
    {
        name: 'LIGHT YELLOW',
        color: '#EED369',
        backgroundColor: 'rgba(238, 211, 105, 0.2)'
    },
    {
        name: 'WHITE CREAM',
        color: '#DCD6CA',
        backgroundColor: 'rgba(220, 214, 202, 0.2)'
    },
    {
        name: 'LIGHT GRAY',
        color: '#B2B4B3',
        backgroundColor: 'rgba(178, 180, 179, 0.2)'
    },
    {
        name: 'OLIVE',
        color: '#768250',
        backgroundColor: 'rgba(118, 130, 80, 0.2)'
    },
    {
        name: 'SPRING GREEN',
        color: '#79B622',
        backgroundColor: 'rgba(121, 182, 34, 0.2)'
    },
    {
        name: 'GREEN',
        color: '#56B980',
        backgroundColor: 'rgba(86, 185, 128, 0.2)'
    },
    {
        name: 'TEAL BLUE',
        color: '#56B5D7',
        backgroundColor: 'rgba(86, 181, 215, 0.2)'
    },
    {
        name: 'SKY BLUE',
        color: '#4CA3EC',
        backgroundColor: 'rgba(76, 163, 236, 0.2)'
    },
    {
        name: 'ROYAL BLUE',
        color: '#2861D4',
        backgroundColor: 'rgba(40, 97, 212, 0.2)'
    },
    {
        name: 'VIOLET',
        color: '#694482',
        backgroundColor: 'rgba(228, 200, 255, 0.89)'
    },
    {
        name: 'LILAC',
        color: '#CE98D3',
        backgroundColor: 'rgba(206, 152, 211, 0.2)'
    },
    {
        name: 'DARK PINK',
        color: '#C54684',
        backgroundColor: 'rgba(197, 70, 132, 0.2)'
    },
    {
        name: 'PINK',
        color: '#E78BB4',
        backgroundColor: 'rgba(231, 139, 180, 0.2)'
    },
    {
        name: 'NEON PINK',
        color: '#FDA7C6',
        backgroundColor: 'rgba(253, 167, 198, 0.2)'
    }
]