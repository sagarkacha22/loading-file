let incompatible_apps = {
	'dropshipping': ['Oberlo', 'BrandsGateway Dropshipping', 'B2B GRIFFATI - DROPSHIP', 'Syncee', 'DEAR Inventory', 'Oberlo ‑ Dropshipping App', 'Syncee ‑ Global Dropshipping'],
	'product feed': ['Flexify: Facebook Product Feed'],
	'inventory': ['Syncio', 'Stocky Inventory Management', 'Veeqo', 'TradeGecko', 'Multi Store Sync Power', 'Stock & Buy', 'DEAR Inventory', 'Syncio Multi Store Sync', 'Stocky', 'Veeqo ‑ Inventory & Fulfilment', 'Multi‑Store Sync Power', 'QuickBooks Commerce', 'Stock&Buy'],
	'bundles': ['Bundler - Product Bundles', 'SMAR7 Bundle Upsell', 'Bundle Builder', 'Unlimited Bundles & Discounts', 'Bundles | Also Bought Together', 'Combo wise - Bundle Products', 'Bundles', 'UFE Cross Sell & Upsell Bundle', 'Bundle Products and Discounts', 'Fast Bundle', 'Combo Wise ‑ Bundle & discount'],
	'language translation': ['G | translate', 'LangShop', 'Translate your shop GTranslate', 'Translation lab', 'Translate My Store', 'Translation Lab ‑ AI Translate', 'Language Translate ‑ Transcy', 'Language Translator ‑ LangShop'],
	'wishlist': ['Ultimate Wishlist', 'wishlist plus', 'Wishlist Hero'],
	'discounts': ['Wholesaler', 'Bold Custom Pricing- Wholesale', 'Volume & Tiered Discounts', 'Wholesale Pricing Discount', 'Discount Ninja', 'Wholesale Gorilla', 'Discount On Cart- Pro Edition!', 'Product Bundle Volume Discount', 'EasySale: schedule sales price'],
	'upsell & cross-sell': ['In Cart Upsell & Cross Sell', 'AfterSell Post Purchase Upsell', 'Upsell X - Simple Upsell & Cross-Sell Offers', 'Discounted Upsells & Cross Sell', 'In Cart Upsell', 'Post Purchase Checkout Upsell', 'Recom.ai - Upsell & Cross-sell', 'One Click Upsell - Zipify OCU app', 'Candy Rack – One Click Upsell', 'Zoorix - Upsell & Cross-Sell Funnel', 'ReConvert post purchase upsell', 'Sweet Upsell', 'iCart Cart Drawer Cart Upsell', 'UFE Cross Sell & Upsell Bundle', 'Cross Sell', 'ReConvert Upsell & Cross Sell', 'One Click Upsell ‑ Zipify OCU', 'Zoorix: Cross Sell Cart Upsell'],
	'related products & recommendations': ['Globo Related Products', 'Also Bought • Related Products', 'Related Products Pro', 'Personalized Recommendations', 'Manual Related Products', 'G:Recommended Related Products'],
	'sticky add-to-cart': ['Add To Cart & Checkout BOOSTER PRO - Sticky Bar, Checkout & Cart, 1-Click Checkout, Quick Buy', 'Sticky Add To Cart BOOSTER PRO', 'ultimate sticky add to cart', 'Sticky Cart by Uplinkly'],
	'pre-order': ['Pre‑order Now ‑ PreOrder', 'Product Waiting Lists'],
	'page builder': ['GemPages Page Builder', 'Shogun Landing Page Builder', 'Zipify Pages Builder & Editor', 'Page Builder & PRO Page Editor', 'Pagefly landing page builder', 'Shogun Page Builder'],
	'currency switcher': ['BUCKS: Currency Converter', 'Multi-currency', 'Multi Currency Checkouts+', 'Coin By ShopPad', 'Currency Converter Ultimate', 'Multi Currency Converter Hero', 'BEST Currency Converter', 'Transcy ‑ Translate & Currency', 'Coin Currency Converter', 'Geolocation', 'Currency Converter Bear', 'Translate My Store & Currency', 'Translate&Currency - LangShop'],
	'all in one': ['VITALS: 40+ apps in one', 'Ultimate Special Offers', 'Selly United', 'Vitals: 40+ Marketing Apps', 'SELLY ‑ Promotion & Pricing'],
	'product customizer and personalizer': ['Customify ? Product Customizerby Customify', 'Product Personalizer', 'Printful: Print on Demand', 'Printify', 'Custom Product Builder', 'Customify ‑ Product Customizer', 'Printify: Print on Demand'],
	'product options': ['Variant Image Wizard + Swatch', 'Product Option by bold', 'Advanced Product Options', 'Best Custom Product Options', 'Dynamic product options', 'Product Options and Customizer', 'Variants Options Swatch King', 'Variant Custom Product Options', 'Bold Product Options'],
	'quick view': ['Quick View Plus by qikify', 'Quick View & Color Swatch ++'],
	'amp': ['Amp by Fireamp', 'Fire AMP'],
	'recurring billing & subscription': ['Seal Subscriptions', 'Recurring Billing by ReCharge', 'Bold Subscriptions', 'Appstle Subscriptions', 'Recharge Subscriptions', 'Appstle℠ Subscriptions'],
	'search and filter': ['Smart Search & Instant Search', 'Rapid Search', 'Omega Instant Search', 'smart search and filter', 'Smart Product Filter & Search', 'Smart Search & Filter'],
	'another/misc': ['Bulk Price Editor/Price Change', 'Excelify: Bulk Import Export Update Migrate or (Excelify)', 'Matrixify (Excelify)', 'Checkout Bump ( Build Grow Scale ) app', 'Pricing By Country', 'WebPanda - Price Intervals', 'Show Price in BTC', 'Product Samples', 'Quiz Kit - Shoppable Quizzes', 'Crowd Funding', 'Advanced Store Localization', 'ShipBob Fulfillment', 'Product Addons', 'Variant Option Swatch King', 'Excel Like Product Bulk Edit', 'VARIANT OPTION PRODUCT OPTIONS', 'Core Web Vitals Booster', 'Matrixify', 'Pricing By Country & Currency', 'Product Price Intervals', 'Quiz Kit | #1 Rated Quiz App', 'Order Fulfillment']
}

let compatible_apps = {
	'inventory': ['Stock Sync - Inventory Update'],
	'bundles': ['Frequently Bought Together'],
	'language translation': ['Langify', 'Weglot'],
	'wishlist': ['Smart Wishlist', 'Wishlist King'],
	'upsell & cross-sell': ['Cart Convert - Product Upsell & Cross-sell app', 'Frequently Bought Together'],
	'related products & recommendations': ['Recomatic Related Products', 'Upsell Recommendations', 'Frequently Bought Together'],
	'sticky add-to-cart': ['CornerCart'],
	'pre-order': ['Globo Pre Order - Preorder NOW', 'Preorderly • Pre‑order PRO'],
	'product options': ['Infinite Options by shoppad'],
	'quick view': ['Quick View by Secomapp'],
	'search and filter': ['Product Filter & Search']
}

for ( let [key, value] of Object.entries(incompatible_apps) ) {
	for ( let i = 0; i < incompatible_apps[key].length; i++ ) {
		incompatible_apps[key][i] = incompatible_apps[key][i].toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'');
	}
}

// let found_any = false;
// let incompatible_apps_list = []
Array.from(document.querySelectorAll('[class*="Polaris-ResourceItem__ListItem"] a[aria-label]')).forEach((elem) => {
	for ( let [key, value] of Object.entries(incompatible_apps) ) {
		if ( Array.from(value).indexOf(elem.getAttribute('aria-label').toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,'')) != -1 ) {
			// found_any = true;
			// incompatible_apps_list.push(elem.getAttribute('aria-label'))
			if ( compatible_apps[key] ) console.log(elem.getAttribute('aria-label') + ' app is not compatible, and alternatives are these: ' + compatible_apps[key]);
			else console.log(elem.getAttribute('aria-label') + ' app is not compatible, and there isn\'t any alternative app.');
		}
	}
});
// if ( incompatible_apps_list.length > 0 ) {
// 	console.log("incompatible apps: ", incompatible_apps_list)
// } else {
// 	console.log('no incompatible apps found!');
// }