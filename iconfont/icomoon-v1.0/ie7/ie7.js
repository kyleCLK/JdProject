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
		'icon-home': '&#xe900;',
		'icon-home2': '&#xe901;',
		'icon-home3': '&#xe902;',
		'icon-image': '&#xe90d;',
		'icon-images': '&#xe90e;',
		'icon-camera': '&#xe90f;',
		'icon-play': '&#xe912;',
		'icon-film': '&#xe913;',
		'icon-connection': '&#xe91b;',
		'icon-file-empty': '&#xe924;',
		'icon-files-empty': '&#xe925;',
		'icon-file-text2': '&#xe926;',
		'icon-file-picture': '&#xe927;',
		'icon-price-tag': '&#xe935;',
		'icon-price-tags': '&#xe936;',
		'icon-cart': '&#xe93a;',
		'icon-phone': '&#xe942;',
		'icon-phone-hang-up': '&#xe943;',
		'icon-pushpin': '&#xe946;',
		'icon-location': '&#xe947;',
		'icon-history': '&#xe94d;',
		'icon-clock': '&#xe94e;',
		'icon-clock2': '&#xe94f;',
		'icon-keyboard': '&#xe955;',
		'icon-display': '&#xe956;',
		'icon-laptop': '&#xe957;',
		'icon-mobile': '&#xe958;',
		'icon-mobile2': '&#xe959;',
		'icon-tablet': '&#xe95a;',
		'icon-undo': '&#xe965;',
		'icon-redo': '&#xe966;',
		'icon-undo2': '&#xe967;',
		'icon-redo2': '&#xe968;',
		'icon-forward': '&#xe969;',
		'icon-bubble': '&#xe96b;',
		'icon-bubbles': '&#xe96c;',
		'icon-bubbles2': '&#xe96d;',
		'icon-bubble2': '&#xe96e;',
		'icon-bubbles3': '&#xe96f;',
		'icon-bubbles4': '&#xe970;',
		'icon-user': '&#xe971;',
		'icon-hour-glass': '&#xe979;',
		'icon-spinner': '&#xe97a;',
		'icon-spinner2': '&#xe97b;',
		'icon-spinner11': '&#xe984;',
		'icon-search': '&#xe986;',
		'icon-zoom-in': '&#xe987;',
		'icon-zoom-out': '&#xe988;',
		'icon-enlarge': '&#xe989;',
		'icon-shrink': '&#xe98a;',
		'icon-enlarge2': '&#xe98b;',
		'icon-shrink2': '&#xe98c;',
		'icon-cog': '&#xe994;',
		'icon-fire': '&#xe9a9;',
		'icon-switch': '&#xe9b6;',
		'icon-menu': '&#xe9bd;',
		'icon-menu2': '&#xe9be;',
		'icon-menu3': '&#xe9bf;',
		'icon-menu4': '&#xe9c0;',
		'icon-link': '&#xe9cb;',
		'icon-star-full': '&#xe9d9;',
		'icon-cross': '&#xea0f;',
		'icon-checkmark': '&#xea10;',
		'icon-checkmark2': '&#xea11;',
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
		'icon-radio-checked': '&#xea54;',
		'icon-radio-unchecked': '&#xea56;',
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
