import React, { Component } from 'react';

import Imagelist from './Imagelist';
import './style.css'
class offers extends Component {
    constructor()
    {
        super();
        this.state={
            name : "Look at all amazing offers"
        }
    }
    render() 
    {
        const imagearrobj =
            [
                {
                    name: " Analog Watch  ",
                    path: "https://images-na.ssl-images-amazon.com/images/I/617HWqbDTEL._UL1133_.jpg",
                    price:330,
                    description:"Comfortable, stylish, Band designed to fit most wrists.",
                    brand:"Acnos",
                    site:"Amazon",
                    link:"https://www.amazon.in/Acnos-Multi-Analogue-FX-425-430-436-Watches/dp/B085FRWFZX/ref=sr_1_6?dchild=1&keywords=combo+watches&qid=1602427117&sr=8-6"

                },
                {
                    name: "Casual Shirts ",
                    path: "https://rukminim1.flixcart.com/image/464/557/jcuu2kw0/shirt/p/5/a/3xl-coms-1155-mrn-nevy-la-milano-original-imaffw4xdptgug7y.jpeg?q=50",
                    price:799,
                    description:"Men Slim Fit Solid Spread Collar Casual Shirt",
                    brand:"La Milano ",
                    site:"Flipkart",
                    link:"https://www.flipkart.com/la-milano-men-solid-casual-dark-blue-maroon-shirt/p/itmf3x6zvhfzszbn?pid=SHTFFWE68CWN7F5F&lid=LSTSHTFFWE68CWN7F5FFA1QOB&marketplace=FLIPKART&srno=s_1_5&otracker=search&otracker1=search&fm=SEARCH&iid=1e506b1b-8ac5-45f1-8de9-397b3cf5f67a.SHTFFWE68CWN7F5F.SEARCH&ppt=sp&ppn=sp&ssid=kd5fnpvkjy5nkb281602437313168&qH=aba8542a1123fc8c"
                },
                {
                    name: " T-shirts ",
                    path: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/13/984ecebc-e326-41f0-909b-29ecfeb34a351592000883478-1.jpg",
                    price:794,
                    description:"Men Pack Of 3 Printed Round Neck T-shirts",
                    brand:"Bulmer",
                    site:"Myntra",
                    link:"https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-3-printed-round-neck-t-shirts/11934782/buy"
                },
                {
                    name: "Mobiles ",
                    path: "https://cdn.shopclues.com/images/thumbnails/36933/200/200/92104771K11RedK33Black14508642951462459269.png",
                    price:1250,
                    description:"I kall mobile combo K11 Red K33",
                    brand:"Kall",
                    site:"Shopclues",
                    link:"https://www.shopclues.com/i-kall-mobile-combo-k11-red-k33-black-with-brand-warranty.html"
                },
                {
                    name:"Curtains" ,
                    path: "https://m.media-amazon.com/images/I/71UMEvrD5cL._AC_UY218_.jpg",
                    price:299,
                    description:"Motif Window Curtain",
                    brand:"Homely",
                    site:"Amazon",
                    link:"https://www.amazon.in/Homely-Polyester-Eyelet-Window-Curtain/dp/B07SC2LXWK/ref=sr_1_6?dchild=1&pf_rd_i=gb_main&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=daa47517-5bef-4e97-b82e-ec3e7d37859c&pf_rd_r=8TWX9A09Y00C7B8TJBBH&pf_rd_s=slot-5&pf_rd_t=701&qid=1602439669&smid=A1XW4A1FMCCIF1&sr=8-6"
                },{
                    name: "Kitchen",
                    path: "https://cdn0.desidime.com/topics/photos/1205878/medium/butterfly-rapid-kettle-1-5-litre-wave-750-ml-water-bottle-rapid-original-imafkfy7zaekbubs.jpeg?1602429080",
                    price:647,
                    description:"Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle",
                    brand:"Butterfly",
                    site:"DesiDime",
                    link:"https://www.desidime.com/deals/butterfly-rapid-kettle-1-5-litre-eco-750-ml-water-bottle-8a72cb30-ea76-4ba1-9798-d611778fa689"
                },
                {
                    name: "Handbags ",
                    path: "https://m.media-amazon.com/images/I/71CJqPPm2KL._AC_UL320_.jpg",
                    price:799,
                    description:"Mammon Women's Handbag ",
                    brand:"Mammon",
                    site:"Amazon",
                    link:"https://www.amazon.in/Mammon-Womens-Stylish-Handbags-4L-bib-Bpink/dp/B07XG2DMRV/ref=sr_1_9?crid=ZFYCFJ7EGD9W&dchild=1&keywords=combo+offers+for+women&qid=1602481864&sprefix=combo+offe%2Caps%2C277&sr=8-9"
                },
                {
                    name: "Footwear ",
                    path: "https://m.media-amazon.com/images/I/61y23bkCZ6L._AC_UL320_.jpg",
                    price:630,
                    description:"WORLD WEAR FOOTWEAR",
                    brand:"Earton",
                    site:"Amazon",
                    link:"https://www.amazon.in/WORLD-WEAR-FOOTWEAR-Multi-Coloured-Moccasins/dp/B07P5NF2D7/ref=sr_1_11?crid=ZFYCFJ7EGD9W&dchild=1&keywords=combo+offers+for+women&qid=1602481864&sprefix=combo+offe%2Caps%2C277&sr=8-11"
                },
               
                {
                    name: "Lehenga Choli ",
                    path: "https://rukminim1.flixcart.com/image/660/792/jvwpfgw0/lehenga-choli/j/z/j/free-noor01-panchhi-nx-original-imafgpbduyhdvyak.jpeg?q=50",
                    price:849,
                    description:"Embroidered Semi Stitched Lehenga Choli ",
                    brand:"panchhi nx",
                    site:"Flipkart",
                    link:"https://www.flipkart.com/panchhi-nx-embroidered-semi-stitched-lehenga-choli/p/itmfgpdturgvxzxn?pid=LCHFGPBJPGA3CJZJ&lid=LSTLCHFGPBJPGA3CJZJRVQRCF&marketplace=FLIPKART&srno=b_1_5&otracker=clp_omu_Fashion%2BTop%2BDeals_1_2.dealCard.OMU_offers-store_offers-store_AZLPMRUZV6H2_1&otracker1=clp_omu_PINNED_neo%2Fmerchandising_Fashion%2BTop%2BDeals_NA_dealCard_cc_1_NA_view-all_1&fm=neo%2Fmerchandising&iid=5ca46d4c-e81e-47f3-b9af-859ba197ada3.LCHFGPBJPGA3CJZJ.SEARCH&ppt=browse&ppn=browse&ssid=p0pfk3m8340000001602482352097"
                },
                {
                    name: "Sun glasses",
                    path: "http://imshopping.rediff.com/imgshop/300-300/shopping/pixs/946/b/buy-1-get-1-free_557af94a47c72._wayfarer-style-sunglasses-green-amp-purple-buy-1-get-1-free.jpg",
                    price:469,
                    description:"Wayfarer Style Sunglasses ",
                    brand:"Wayfarer",
                    site:"Reddif",
                    link:"http://shopping.rediff.com/product/wayfarer-style-sunglasses-green-amp-purple-buy-1-get-1-free/14884323?sc_cid=www.google.com|search_buy-one-get-one-free"
                },
                {
                    name: "Hair band",
                    path: "https://images-eu.ssl-images-amazon.com/images/I/61U05WPKXbL._AC_UL200_SR200,200_.jpg",
                    price:260,
                    description:" Korean Style Solid Fabric Knot  ",
                    brand:"Arnav",
                    site:"Amazon",
                    link:"https://www.amazon.in/Accessories-Korean-Plastic-Hairband-Headband/dp/B08GH7C8GF/ref=zg_bsnr_jewelry_2?_encoding=UTF8&psc=1&refRID=JXXYD6VKRDSWV93276WZ"
                },
                {
                    name: "Bedsheets ",
                    path: "https://rukminim1.flixcart.com/image/612/612/kao98cw0/bedsheet/j/f/h/bedsheet-0041-2pack-bedsheet-0041-2pack-flat-mr-ronak-original-imafs6ve9phpkymz.jpeg?q=70",
                    price:2964,
                    description:"Mini Sewing Machine With Foot Pedal",
                    brand:"DealMart",
                    site:"Reddif",
                    link:"http://shopping.rediff.com/product/buy-1-get-1-free-mini-sewing-machine-with-foot-pedal-b1g1sewm01/22770990?sc_cid=www.google.com|search_buy-one-get-one-free"
                },
                {
                    name: "Sewing Machine",
                    path: "http://imshopping.rediff.com/imgshop/300-300/shopping/pixs/4654/p/pedal-b1g1sewm01._buy-1-get-1-free-mini-sewing-machine-with-foot-pedal-b1g1sewm01.jpg",
                    price:2480,
                    description:"  Motorbike Helmet  (Black)",
                    brand:"Steelbird",
                    site:"Flipkart",
                    link:"http://shopping.rediff.com/product/buy-1-get-1-free-mini-sewing-machine-with-foot-pedal-b1g1sewm01/22770990?sc_cid=www.google.com|search_buy-one-get-one-free"
                },
                {
                    name: "Cashews ",
                    path: "https://m.media-amazon.com/images/I/914AwLDkAkL._AC_UL320_.jpg",
                    price:945,
                    description:"Whole Cashew Premium Combo Pack",
                    brand:"Tulsi",
                    site:"Amazon",
                    link:"https://www.amazon.in/Tulsi-Premium-Cashews-Combo-Packet/dp/B07H4K6RB9/ref=sr_1_9?dchild=1&keywords=kaju+combo+pack&qid=1602552918&sr=8-9"
                },
                {
                    name: "Floral art",
                    path: "https://rukminim1.flixcart.com/image/612/612/k0wqwsw0/painting/y/f/z/safj25-saf-original-imafkhhv2hgjzccc.jpeg?q=70",
                    price:199,
                    description:"SAF Floral Art 6MM MDF Framed set",
                    brand:"SAF",
                    site:"Flipkart",
                    link:"https://www.flipkart.com/saf-floral-art-6mm-mdf-framed-set-3-digital-reprint-15-inch-x-18-painting/p/itmfeybz7sy8xucc?pid=PTGFDZQ9HFURHYFZ&lid=LSTPTGFDZQ9HFURHYFZRKROEA&marketplace=FLIPKART&srno=b_1_23&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_3_3.dealCard.OMU_AAGMKVX48CSJ_2&otracker1=hp_omu_SECTIONED_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_dealCard_cc_3_NA_view-all_2&fm=neo%2Fmerchandising&iid=5fad47cf-bed3-442a-b06e-eedfefadff01.PTGFDZQ9HFURHYFZ.SEARCH&ppt=browse&ppn=browse&ssid=iukwe56dv40000001602553179833"
                },
                {
                    name: "Bath towels",
                    path: "https://rukminim1.flixcart.com/image/612/612/ke4kjgw0/bath-towel/s/e/4/dollar-hand-towel-dz-dollar-set-of-12-hand-towel-metropolis-original-imafuv3gfzd2sgcs.jpeg?q=70",
                    price:759,
                    description:" Cotton 500 GSM Hand, Face Towel ",
                    brand:"Metropolis",
                    site:"Flipkart",
                    link:"https://www.flipkart.com/metropolis-cotton-500-gsm-hand-face-towel/p/itm4274f8e3a3325?pid=BTWFUUJGNZWA8SE4&lid=LSTBTWFUUJGNZWA8SE49G9LLJ&marketplace=FLIPKART&srno=b_1_1&otracker=nmenu_sub_Home%20%26%20Furniture_0_Bath%20Towels&fm=neo%2Fmerchandising&iid=en_HEO%2F6qCCLJtzy%2BcSceO%2F%2BUBK9m7nJduXLXUB9nfHHQe0Na5%2BwwH5gvnug%2FLputRcSI1iMzEgwo%2Fzmhi6ZSCfUA%3D%3D&ppt=browse&ppn=browse&ssid=e2slsaa1e80000001602553430660"
                },
                
                
                
            ]
            
        const arraycard = imagearrobj.map((imagecard, i) => {
            return (<Imagelist key={i} name={imagearrobj[i].name}
                path={imagearrobj[i].path}
                price={imagearrobj[i].price}
                description={imagearrobj[i].description} 
                brand={imagearrobj[i].brand}
                site={imagearrobj[i].site}
                link={imagearrobj[i].link}/>
                )
        })
        return (
            <div className="myapp">
              
                <h1 className="welcome">{this.state.name}</h1>
                {arraycard}
                
            </div>
        );
    }
}
export default offers;