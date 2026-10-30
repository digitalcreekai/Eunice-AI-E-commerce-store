# SheSlay

A responsive fashion and beauty product listing site built with HTML, CSS, JavaScript, and a small Next.js static-export wrapper. The site includes a promotional slideshow, six category filters, a data-driven catalog of 30 products, sorting, load-more behavior, and a working demonstration cart. It has no backend, checkout, or payment collection.

## Files

```text
index.html       Page structure
styles.css       Colors, layout, responsive rules, and interaction states
script.js        Product catalog, filters, slideshow, and cart behavior
images/          Local category artwork, slideshow image, and missing-photo fallback
app/             Next.js static-export entry point, rendering the existing page
public/          Static CSS, JavaScript, and image assets served by Next.js
out/             Generated static site from the Next.js build (not source)
package.json     Next.js scripts and dependencies
pnpm-lock.yaml   Locked dependency versions
README.md        This guide
```

## Run locally

Install Node.js 20.9 or newer and pnpm, then run `pnpm install` followed by `pnpm dev` in this folder to preview the Next.js version locally. Run `pnpm build` to generate a static site in `out/`. The original `index.html` can still be opened directly for a quick preview. Google Fonts needs internet; system font fallbacks are included.

## Product counts

| Category | Products |
| --- | ---: |
| Skincare | 5 |
| Makeup | 5 |
| Hair Care | 5 |
| Bath & Body | 5 |
| Bags | 5 |
| Shoes | 5 |
| **Total** | **30** |

The catalog is in the `products` array near the top of `script.js`. Each object has a unique `id`, `name`, `price`, `category`, and `image`. Add another correctly formatted object to the array; the product card appears automatically. IDs must be unique. Use one of the six exact category names so category filters include the product. The layout grows to fit additional products and adds a Load more button when there are more than 12 in the current view.

Example:

```js
{id:31,name:"New Favourite",price:19,category:"Skincare",image:"images/new-favourite.jpg"}
```

Set `price` to a number in USD (for example, `19`) to show `$19.00` and enable Add to Cart. Use `price:null` to show “Price coming soon” and disable adding it. These are sample demonstration prices, not verified current prices or inventory.

To replace an image, put a permitted image file in `images/` and change the relevant object's `image` path, such as `image:"images/new-favourite.jpg"`. Product cards use `object-fit: cover`, so portrait-oriented images work well. Images that could not be identified use the clearly labeled `images/photo-coming-soon.svg`; failed remote image loads also fall back to that image. Category tile and slideshow photos are configured near the top of `script.js`.

The product array is not restricted to five items in any category. Add as many objects as needed. `renderProducts()` builds the cards from that array. Category selection from the header menu, category tiles, slideshow buttons, and View All Products updates the same filter. The cart stores quantities in page memory; repeated clicks increase the quantity and update the count and subtotal. Refreshing the page resets this demonstration cart.

## Product photos and sources

Each hero slide displays one product photo, blended into the cream banner. The Hair Care category cover uses an OLAPLEX No.3 Hair Perfector image, and Bath & Body uses Victoria's Secret Fresh & Clean Body Mist. All six category covers use distinct, relevant product photographs. The five catalog entries that previously had no image now use an exact or clearly labeled similar product photo: Medicube PDRN Hydrating Gel Cleanser for the unnamed foam-gel variant, SKIN1004 Madagascar Centella Light Cleansing Oil for the likely “Central/Centella” match, Fenty Hair treatment for the broad “Fenty Skin” entry under Hair Care, eos Vanilla Cashmere Body Wash for the unverified Midnight Cocoa Bloom name, and adidas Samba OG as a similar shoe for the ambiguous “Simbas” entry. Alt text identifies these as similar/uncertain where needed. EOS is priced at $11.99 and can be added to the demo cart; this uses the listed eos Vanilla Cashmere Body Wash price as a reference, not a verified price for “Midnight Cocoa Bloom”. The `script.js` image URLs use public brand/retailer image CDNs. If an external host blocks an image, the page shows the local placeholder instead. Before public commercial use, confirm image-use permission with the relevant brand or retailer and replace any image whose use is not authorized.

Category cover references: [Victoria's Secret Fresh & Clean Body Mist](https://www.victoriassecret.com/us/vs/beauty-catalog/5000009566?brand=vs&choice=8580&collectionId=f0902ccf-59df-4478-a7ad-3c6310cecb92&genericId=11260373&priceType=regular) and [OLAPLEX No.3 Hair Perfector](https://www.asos.com/olaplex/olaplex-no3-hair-perfector-100ml/prd/20626279).

Similar product references: [Medicube PDRN Hydrating Gel Cleanser](https://www.tobepty.com/collections/medicube?page=2), [SKIN1004 Centella Light Cleansing Oil](https://www.skin1004.com/products/skin1004-madagascar-centella-light-cleansing-oil), [Fenty Hair The Comeback Kid](https://fentybeauty.com/products/the-comeback-kid-instant-damage-treatment), [eos Vanilla Cashmere Body Wash](https://evolutionofsmooth.com/products/vanilla-cashmere-body-wash), and [adidas Samba OG](https://www.adidas.com/us/samba-og-sftm-shoes/HQ7600.html).

Sources used for the product photos:

- St. Ives Rose Water & Aloe Vera Body Wash: [H-E-B product listing](https://www.heb.com/product-detail/st-ives-rose-water-aloe-vera-refreshing-body-wash/3481010)
- Simple Refreshing Facial Wash: [Simple product listing at Vridhistores](https://www.vridhistores.com/simple-refreshing-facial-facewash-100ml-tube-9566)
- Dr. Rashel Ubtan Face Serum (temporary brand photo for “Dr Rachel Face Serum”; exact item not confirmed): [Dr. Rashel official listing](https://dr.rashel.in/products/ubtan-face-serum-30-ml)
- Morphe x James Charles palette: [Cult Beauty product listing](https://www.cultbeauty.com/p/morphe-the-james-charles-artistry-palette/12007320/)
- Huda Beauty Power Bullet lipstick (temporary photo for the broad “Huda Beauty” entry): [Kfarma Cosmetics listing](https://kfarmacosmetics.al/products/huda-beauty-power-bullet-cream-glow-sweet-nude-habibi)
- MARS All I Need Makeup Kit (temporary photo for the broad “Mars” entry): [MARS official listing](https://marscosmetics.in/products/all-i-need-makeup-kit)
- Fenty Skin Butta Drop: [Sephora New Zealand product listing](https://www.sephora.nz/brands/fenty-skin)
- Rhode Peptide Lip Treatment (temporary brand visual for the broad “Rhode” catalog entry): [Sephora Switzerland listing](https://www.sephora.ch/p/peptide-lip-treatment---pflegender-glaze-P1000209352.html)
- Gisou Honey Infused Hair Mask: [Kalila product listing](https://kalilaeg.com/products/gisou-honey-infused-hair-mask-230-ml)
- Mizani 25 Miracle Milk (temporary brand visual for the broad “Mizani” entry): [Salon500 product listing](https://salon500.co.za/products/mizani-miracle-milk-250ml)
- OUAI Leave-In Conditioner: [Sephora Thailand listing](https://www.sephora.co.th/products/ouai-leave-in-conditioner)
- Paddle brush: [Simula wooden paddle brush listing](https://www.simula.ph/products/wooden-paddle-brush)
- Bath & Body Works Warm Vanilla Sugar Body Wash: [Bath & Body Works product listing](https://www.bathandbodyworks.com/p/warm-vanilla-sugar-body-wash-028011608)
- Dove Nourishing Body Wash: [Savers product listing](https://www.savers.co.uk/toiletries/washing-bathing/shower-gels-body-wash/dove-hydrate-body-wash-shower-gel-225ml/p/839706)
- Olay Body Lotion (temporary brand visual): [Walmart listing](https://www.walmart.com/ip/5325576897)
- Bath & Body Works Into the Night Body Lotion: [Bath & Body Works product listing](https://www.bathandbodyworks.com/p/into-the-night-body-lotion-028003658)
- Coach Tabby bag (temporary brand visual for the broad “Coach Bag” entry): [John Lewis listing](https://www.johnlewis.com/coach-tabby-26-pebbled-leather-shoulder-bag/chalk/p5071387)
- Guess handbag (temporary photo for the broad “Guess Bag” entry): [Occasion retailer listing](https://www.occasion.com.tr/guess-kadin-beyaz-postaci-cantasi-hwzg7879060/)
- Hermès Picotin bag (temporary photo for the broad “Hermès Bag” entry): [Bagista listing](https://bagista.co.uk/products/hermes-picotin-18-nata-clemence-palladium-hardware)
- Gucci GG Marmont bag (temporary brand visual for the broad “Gucci Bag” entry): [Gucci official listing](https://www.gucci.com/au/en_au/pr/women/handbags/crossbody-bags-for-women/gg-marmont-medium-shoulder-bag-p-837267AAE381000)
- Dior Lady bag (temporary brand visual for the broad “Dior Bag” entry): [Dior official listing](https://www.dior.com/ru_ru/fashion/products/M0565OBDU_M11G)
- Aldo pointed-toe heel (temporary brand visual for the broad “Aldo” entry): [ALDO product listing](https://aldoshoes.co.uk/collections/nude-shoes)
- Zara slingback shoes (temporary photo for the broad “Zara” entry): [Zara official listing](https://www.zara.com/in/en/high-heel-slingback-shoes-p12222319.html)
- Chanel slingback heels (temporary photo for the broad “Chanel” entry): [Chanel official listing](https://www.chanel.cn/cn/fashion/p/G31319Y5000694305/slingbacks-goatskin-grosgrain/)
- Nike sneakers: [Unsplash photo page](https://unsplash.com/photos/a-pair-of-white-and-blue-sneakers-on-a-white-background-scbX2tuzfis) — free under the Unsplash License.

The Medicube, Central Light, Fenty, EOS, and Simbas entries use similar product photos where the catalog name did not identify an exact product. Broad names—including Dr Rachel Face Serum, Huda Beauty, Mars, Rhode, Mizani, Olay Body Lotion, Guess Bag, Coach Bag, Hermès Bag, Gucci Bag, Dior Bag, Zara, Aldo, and Chanel—use temporary matching-brand photos, not a claim that the pictured model is the exact listed product.

The earlier Pinterest references could not be opened and are not used. The product image paths no longer depend on those links. The three previous slide Pinterest links and product-link inventory from the original brief are retained below for record only.

Slide Pinterest references: `https://pin.it/dWOQprb3Q`, `https://pin.it/5DZP5OKjv`, `https://pin.it/4MUhLGvA0`.

Slide references: `https://pin.it/dWOQprb3Q`, `https://pin.it/5DZP5OKjv`, `https://pin.it/4MUhLGvA0`.

Original product Pinterest references (in catalog order; inaccessible and not used as image sources):

- Skincare: `https://pin.it/5wbPfBSNd`, `https://pin.it/2L7uDJT8Y`, `https://pin.it/4KEU4xgV3`, `https://pin.it/6Mcp3ivYP`, `https://pin.it/5o83NMxaC`
- Makeup: `https://pin.it/2rN7PxLRh`, `https://pin.it/2JOcXRl7R`, `https://pin.it/7alpHZp9y`, `https://pin.it/7LwQAwYHa`, `https://pin.it/2Que4NsdQ`
- Hair Care: `https://pin.it/2Fmy1fhoz`, `https://pin.it/7rfpeP5lf`, `https://pin.it/74CHjKS9O`, `https://pin.it/3HRkCOEEI` (also supplied for Paddle Brush)
- Bath & Body: `https://pin.it/6xbYuh6RA` (provided for both first products), no image was provided for EOS, `https://pin.it/4TgYrjPCD`, `https://pin.it/6PBNsoGcg`
- Bags: `https://pin.it/1ejq1yseP`, `https://pin.it/7vsW0gg01` (provided for Coach and Hermès), `https://pin.it/3eRMul3sZ`, `https://pin.it/2KwNpBC04`
- Shoes: `https://pin.it/4T1FPfFLR` (provided for Simbas and Zara), `https://pin.it/4LZHFGAg5`, `https://pin.it/1RHUg1Ega` (provided for Nike and Chanel)

## Deploy with Vercel

The project is configured as a Next.js static export. Its Next.js app reads the existing `index.html` body and serves the existing site assets; the visual design and storefront interactions remain in the original HTML, CSS, and JavaScript files. `next.config.js` sets `output: "export"`, so `pnpm build` creates the static site in `out/` without requiring a runtime backend.

To import the existing GitHub repository into Vercel, choose **Add New → Project**, select `digitalcreekai/Eunice-AI-E-commerce-store`, and set the Root Directory to the repository root. Choose **Next.js** as the framework preset (or keep auto-detection), use `pnpm install` as the install command, and `pnpm build` as the build command. Leave Output Directory on the framework default so it uses the static export in `out/`. Select **Deploy**. Vercel will provide a `vercel.app` URL after the deployment succeeds.

Product photos are mostly loaded from brand and retailer image hosts, with a local fallback image for failed requests. Google Fonts also uses an external connection; system font fallbacks are defined for offline use.
