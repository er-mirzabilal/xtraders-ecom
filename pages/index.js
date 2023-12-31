import Footer from "@/components/Footer";
import Header from "components/header";
import DealOfTheDay from "../components/DealOfTheDay";
import TopCategory from "@/components/TopCategory";
import Discount from "@/components/Discount";
import FreeDelevery from "@/components/FreeDelevery";
import Explore from "@/components/Explore";
import LimitedEdtion from "@/components/LimitedEdtion";
import BedDiscount from "@/components/BedDiscount";
import Downlond from "@/components/Downlond";
import HotArival from "@/components/HotArival";
import { useRef, useState } from "react";
import { Kitchen } from "@/components/Data/KitchenData";
import { Electronics } from "@/components/Data/ConsumerElectronicsdata";
import { PetSuppliesData } from "@/components/Data/PetSuppiesData";
import { Beauty } from "@/components/Data/Beauty&PersonalCare";
import { ClothingShoes } from "@/components/Data/ClothingShoes&Jewelry";
import { GroceryFood } from "@/components/Data/Grocery&GourmetFood";


export default function Home() {
  const [parentState, setParentState] = useState(0);

  const myDivRef = useRef(null);

  const scrollToDiv = () => {
   
      myDivRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
   
  };


  const myDivRef1 = useRef(null);

  const scrollToDiv1 = () => {
   
      myDivRef1.current.scrollIntoView({ behavior: "smooth", block: "start" });
   
  };

  const myDivRef2 = useRef(null);

  const scrollToDiv2 = () => {
   
      myDivRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });
   
  };

  const myDivRef3 = useRef(null);

  const scrollToDiv3 = () => {
   
      myDivRef3.current.scrollIntoView({ behavior: "smooth", block: "start" });
   
  };


  const myDivRef4 = useRef(null);

  const scrollToDiv4 = () => {
   
      myDivRef4.current.scrollIntoView({ behavior: "smooth", block: "start" });
   
  };




  const handleChildData = (childData) => {
    setParentState(childData);
  };
  const [parentState2, setParent2State] = useState(0);

  const handleChildData2 = (childData) => {
    setParent2State(childData);
  };
  return (
    <>
   
    {/* <ContextApi> */}
      {/* Hello world */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="pingback" href="https://x4traders.com/xmlrpc.php" />
      <title>Online Shopping Mart</title>
      <meta name="robots" content="max-image-preview:large" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="x4Traders » Feed"
        href="https://x4traders.com/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="x4Traders » Comments Feed"
        href="https://x4traders.com/comments/feed/"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 0.07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="linearicons-css"
        href="css/linearicons.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="css/style.min.css"
        type="text/css"
        media="all"
      />
      <style
        id="wp-block-library-theme-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.wp-block-audio figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-audio figcaption{color:hsla(0,0%,100%,.65)}.wp-block-audio{margin:0 0 1em}.wp-block-code{border:1px solid #ccc;border-radius:4px;font-family:Menlo,Consolas,monaco,monospace;padding:.8em 1em}.wp-block-embed figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-embed figcaption{color:hsla(0,0%,100%,.65)}.wp-block-embed{margin:0 0 1em}.blocks-gallery-caption{color:#555;font-size:13px;text-align:center}.is-dark-theme .blocks-gallery-caption{color:hsla(0,0%,100%,.65)}.wp-block-image figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-image figcaption{color:hsla(0,0%,100%,.65)}.wp-block-image{margin:0 0 1em}.wp-block-pullquote{border-bottom:4px solid;border-top:4px solid;color:currentColor;margin-bottom:1.75em}.wp-block-pullquote cite,.wp-block-pullquote footer,.wp-block-pullquote__citation{color:currentColor;font-size:.8125em;font-style:normal;text-transform:uppercase}.wp-block-quote{border-left:.25em solid;margin:0 0 1.75em;padding-left:1em}.wp-block-quote cite,.wp-block-quote footer{color:currentColor;font-size:.8125em;font-style:normal;position:relative}.wp-block-quote.has-text-align-right{border-left:none;border-right:.25em solid;padding-left:0;padding-right:1em}.wp-block-quote.has-text-align-center{border:none;padding-left:0}.wp-block-quote.is-large,.wp-block-quote.is-style-large,.wp-block-quote.is-style-plain{border:none}.wp-block-search .wp-block-search__label{font-weight:700}.wp-block-search__button{border:1px solid #ccc;padding:.375em .625em}:where(.wp-block-group.has-background){padding:1.25em 2.375em}.wp-block-separator.has-css-opacity{opacity:.4}.wp-block-separator{border:none;border-bottom:2px solid;margin-left:auto;margin-right:auto}.wp-block-separator.has-alpha-channel-opacity{opacity:1}.wp-block-separator:not(.is-style-wide):not(.is-style-dots){width:100px}.wp-block-separator.has-background:not(.is-style-dots){border-bottom:none;height:1px}.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots){height:2px}.wp-block-table{margin:0 0 1em}.wp-block-table td,.wp-block-table th{word-break:normal}.wp-block-table figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-table figcaption{color:hsla(0,0%,100%,.65)}.wp-block-video figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-video figcaption{color:hsla(0,0%,100%,.65)}.wp-block-video{margin:0 0 1em}.wp-block-template-part.has-background{margin-bottom:0;margin-top:0;padding:1.25em 2.375em}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="wc-blocks-vendors-style-css"
        href="css/wc-blocks-vendors-style.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-blocks-style-css"
        href="css/wc-blocks-style.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="classic-theme-styles-css"
        href="css/classic-themes.min.css"
        type="text/css"
        media="all"
      />
      <style
        id="global-styles-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nbody{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('index_1.html#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('index_1.html#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('index_1.html#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('index_1.html#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('index_1.html#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('index_1.html#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('index_1.html#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('index_1.html#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}\n.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="contact-form-7-css"
        href="css/styles.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="woocommerce-general-css"
        href="css/woocommerce.css"
        type="text/css"
        media="all"
      />
      <style
        id="woocommerce-inline-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.woocommerce form .form-row .required { visibility: visible; }\n",
        }}
      />
      <link
        rel="stylesheet"
        id="wcboost-products-compare-css"
        href="css/compare.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wcboost-variation-swatches-css"
        href="css/frontend.css"
        type="text/css"
        media="all"
      />
      <style
        id="wcboost-variation-swatches-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.wcboost-variation-swatches__item { width: 30px; height: 30px; line-height: 30px; }.wcboost-variation-swatches--round.wcboost-variation-swatches--button .wcboost-variation-swatches__item {border-radius: 15px}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="wcboost-wishlist-css"
        href="css/wishlist.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="martfury-fonts-css"
        href="https://fonts.googleapis.com/css?family=Work+Sans%3A300%2C400%2C500%2C600%2C700%7CLibre+Baskerville%3A400%2C700&subset=latin%2Clatin-ext&ver=20170801"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="ionicons-css"
        href="css/ionicons.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="eleganticons-css"
        href="css/eleganticons.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-awesome-css"
        href="css/font-awesome.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="bootstrap-css"
        href="css/bootstrap.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="martfury-css"
        href="css/style.css"
        type="text/css"
        media="all"
      />
      <style
        id="martfury-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.site-header .logo img  {width:450px; }.site-header .logo img  {height:185px; }\n",
        }}
      />
      <link
        rel="stylesheet"
        id="photoswipe-css"
        href="css/photoswipe.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="photoswipe-default-skin-css"
        href="css/default-skin.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tawc-deals-css"
        href="css/tawc-deals.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="js_composer_front-css"
        href="css/js_composer.min.css"
        type="text/css"
        media="all"
      />
      {/*[if lt IE 9]>
  
  <![endif]*/}
      {/*[if lt IE 9]>
  
  <![endif]*/}
      <link rel="https://api.w.org/" href="https://x4traders.com/wp-json/" />
      <link
        rel="alternate"
        type="application/json"
        href="https://x4traders.com/wp-json/wp/v2/pages/2537"
      />
      <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="https://x4traders.com/xmlrpc.php?rsd"
      />
      <link
        rel="wlwmanifest"
        type="application/wlwmanifest+xml"
        href="https://x4traders.com/wp-includes/wlwmanifest.xml"
      />
      <meta name="generator" content="WordPress 6.2" />
      <meta name="generator" content="WooCommerce 7.2.0" />
      <link rel="canonical" href="https://x4traders.com/" />
      <link rel="shortlink" href="https://x4traders.com/" />
      <link
        rel="alternate"
        type="application/json+oembed"
        href="https://x4traders.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fx4traders.com%2F"
      />
      <link
        rel="alternate"
        type="text/xml+oembed"
        href="https://x4traders.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fx4traders.com%2F&format=xml"
      />
      <noscript>
        &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1 !important;{" "}
        {"}"}
        &lt;/style&gt;
      </noscript>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}",
        }}
      />
      <meta
        name="generator"
        content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress."
      />
      <meta
        name="generator"
        content="Powered by Slider Revolution 6.6.7 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
      />
      <link rel="icon" href="images/icon-100x100.png" sizes="32x32" />
      <link rel="icon" href="images/icon-300x300.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="images/icon-300x300.png" />
      <meta
        name="msapplication-TileImage"
        content="https://x4traders.com/wp-content/uploads/2022/12/icon-300x300.png"
      />
      <style
        type="text/css"
        id="wp-custom-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t.header-layout-3 .site-header .header-bar {    background-color: transparent;}\t\t",
        }}
      />
      <style
        id="kirki-inline-styles"
        dangerouslySetInnerHTML={{
          __html:
            "/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}",
        }}
      />
      <style
        type="text/css"
        data-type="vc_shortcodes-custom-css"
        dangerouslySetInnerHTML={{
          __html:
            ".vc_custom_1671603524734{margin-top: 0px !important;margin-bottom: 20px !important;}",
        }}
      />
      <noscript>
        &lt;style&gt; .wpb_animate_when_almost_visible {"{"} opacity: 1; {"}"}
        &lt;/style&gt;
      </noscript>
      
      <div id="page" className="hfeed site">
        {/* header */}
        <Header scrole3={scrollToDiv3} scrole4={scrollToDiv4}  scrole2={scrollToDiv2} scrole1={scrollToDiv1} scrole={scrollToDiv} favCount={parentState} shopCount={parentState2} />
        <div id="content" className="site-content">
          <div className="martfury-container">
            <div className="row">
              <section className="wpb-content-wrapper">
                <LimitedEdtion />

                {/* free delevery */}

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 10 }}
                              />
                            </div>
                            {/* deal of the day */}
                            <FreeDelevery />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>
                            {/* deal of the day */}
                            <DealOfTheDay favCount={handleChildData}  shopCount={handleChildData2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* minimal */}

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>

                            <Discount />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* top category */}

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>
                            <TopCategory />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* exlore 1 */}

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                             <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>
                            <div ref={myDivRef}>
                            <Explore Catagrie={"Home & Kitchen"} data={Kitchen} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* exlore 2 */}

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                            </div>
                            <div ref={myDivRef1}>
                            <Explore Catagrie={"Pet Supplies"} data={PetSuppliesData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* exlore 3 */}

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                            </div>
                            <div ref={myDivRef2}>
                            <Explore  Catagrie={"Beauty & Personal Care"} data={Beauty} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* exlore 4 */}
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                            </div>
                            <div ref={myDivRef3}>
                            <Explore Catagrie={"Clothing, Shoes & Jewelry"} data={ClothingShoes} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* exlore 5 */}
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                            </div>
                            <div ref={myDivRef4}>
                            <Explore Catagrie={"Grocery & Gourmet Food"} data={GroceryFood} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BedDiscount */}
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>
                            <BedDiscount />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* downlond */}
                {/* <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>
                            
                            <Downlond />
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* hot arival */}
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                           
                            </div>
                            <HotArival scrole={scrollToDiv} scrole4={scrollToDiv4} scrole3={scrollToDiv3} scrole2={scrollToDiv2} scrole1={scrollToDiv1}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* #content */}
        {/* footer */}
        <Footer />
        {/* #colophon */}
      </div>
      {/* #page */}
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:400%2C500%2C700%7COpen+Sans:700&display=swap"
        rel="stylesheet"
        property="stylesheet"
        media="all"
        type="text/css"
      />
      <link
        rel="stylesheet"
        id="rs-plugin-settings-css"
        href="css/rs6.css"
        type="text/css"
        media="all"
      />
      
      {/* </ContextApi> */}
    </>
  );
}
