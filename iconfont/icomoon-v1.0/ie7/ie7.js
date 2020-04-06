/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-location': '&#xe947;',
		'icon-menu': '&#xe9bd;',
		'icon-menu2': '&#xe9be;',
		'icon-menu3': '&#xe9bf;',
		'icon-menu4': '&#xe9c0;',
		'icon-arrow-up': '&#xea32;',
		'icon-arrow-right': '&#xea34;',
		'icon-arrow-down': '&#xea36;',
		'icon-arrow-left': '&#xea38;',
		'icon-arrow-up2': '&#xea3a;',
		'icon-arrow-right2': '&#xea3c;',
		'icon-arrow-down2': '&#xea3e;',
		'icon-arrow-left2': '&#xea40;',
		'icon-circle-up': '&#xea41;',
		'icon-circle-right': '&#xea42;',
		'icon-circle-down': '&#xea43;',
		'icon-circle-left': '&#xea44;',
		'icon-ctrl': '&#xea50;',
		'icon-ctrl1': '&#xea51;',
		'icon-paragraph-left': '&#xea77;',
		'icon-paragraph-center': '&#xea78;',
		'icon-paragraph-right': '&#xea79;',
		'icon-paragraph-justify': '&#xea7a;',
		'icon-indent-increase': '&#xea7b;',
		'icon-indent-decrease': '&#xea7c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
