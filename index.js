// import choo
var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo()

// import template
var main = require('./templates/main.js')

app.use(function (state) {
    // initialize state
    state.horses = [
        {color: 'Red', mane: 'Black', tail: 'Violet', shoes: 'Blue', eye: 'Yellow', type: 'Normal'},
        {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red', type: 'Normal'},
        {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red', type: 'Unicorn'},
        {color: 'Orange', mane: 'Purple', tail: 'Green', shoes: 'Black', eye: 'Red', type: 'Winged'},
        

        {color: 'AliceBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'AntiqueWhite', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Aqua', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Aquamarine', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Azure', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Beige', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Bisque', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Black', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'BlanchedAlmond', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Blue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'BlueViolet', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Brown', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'BurlyWood', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'CadetBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Chartreuse', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Chocolate', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Coral', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'CornflowerBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Cornsilk', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Crimson', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Cyan', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkCyan', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkGoldenRod', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkGray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkGrey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkKhaki', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkMagenta', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkOliveGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkOrange', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkOrchid', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkRed', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkSalmon', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkSeaGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkSlateBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkSlateGray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkSlateGrey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkTurquoise', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DarkViolet', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DeepPink', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DeepSkyBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DimGray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DimGrey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'DodgerBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'FireBrick', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'FloralWhite', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'ForestGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Fuchsia', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Gainsboro', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'GhostWhite', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Gold', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'GoldenRod', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Gray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Grey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Green', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'GreenYellow', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'HoneyDew', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'HotPink', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'IndianRed ', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Indigo ', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Ivory', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Khaki', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Lavender', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LavenderBlush', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LawnGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LemonChiffon', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightCoral', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightCyan', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightGoldenRodYellow', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightGray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightGrey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightPink', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightSalmon', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightSeaGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightSkyBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightSlateGray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightSlateGrey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightSteelBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LightYellow', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Lime', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'LimeGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Linen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Magenta', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Maroon', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumAquaMarine', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumOrchid', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumPurple', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumSeaGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumSlateBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumSpringGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumTurquoise', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MediumVioletRed', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MidnightBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MintCream', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'MistyRose', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Moccasin', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'NavajoWhite', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Navy', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'OldLace', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Olive', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'OliveDrab', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Orange', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'OrangeRed', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Orchid', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PaleGoldenRod', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PaleGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PaleTurquoise', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PaleVioletRed', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PapayaWhip', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PeachPuff', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Peru', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Pink', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Plum', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'PowderBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Purple', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'RebeccaPurple', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Red', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'RosyBrown', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'RoyalBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SaddleBrown', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Salmon', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SandyBrown', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SeaGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SeaShell', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Sienna', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Silver', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SkyBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SlateBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SlateGray', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SlateGrey', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Snow', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SpringGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'SteelBlue', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Tan', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Teal', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Thistle', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Tomato', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Turquoise', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Violet', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Wheat', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'White', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'WhiteSmoke', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'Yellow', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'},
{color: 'YellowGreen', mane:'Black', tail: 'Black', shoes: 'Grey', eye: 'Purple', type: 'Normal'}
    ]
})

// create a route
app.route('/', main)
app.route('/BlockHorses', main)

// start app
app.mount('div')

