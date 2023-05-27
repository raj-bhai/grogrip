import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import favicon from "../../public/favicon.ico";
const SEO = (props) => {
   const { title, imageUrl, altText, dynamicURL, keywords, pageDescription, pageUrl, pageTitle, ogImage } = props;
   const canonicalUrl = dynamicURL ? `https://www.grogrip.com${dynamicURL}` : "https://www.grogrip.com/home";

   const titleTemplate = "%s | Grogrip";

   const finalTitle = titleTemplate.replace("%s", title);
   return (
      <>
         <NextSeo
            title={finalTitle}
            description={pageDescription}
            openGraph={{
               title:finalTitle,
               pageDescription,
               url: canonicalUrl,
               images: [
                  {
                       url: favicon || "../../public/favicon.ico",
                     alt: altText || "Grogrip_Logo",
                  },
               ],
               site_name: "https://grogrip.com/home",
               type: "website",
            }}
            canonical={canonicalUrl}
            additionalMetaTags={[
               {
                  name: "keywords",
                  content: keywords || "grogrip,#grogrip_media, growgrip, youtube automation, #automate_youtube, #grogrip",
               },
               {
                  name: "description",
                  content: pageDescription,
               },

               {
                  name: "og:url",
                  //    content: pageUrl,
                  content: canonicalUrl,
               },

               {
                  name: "og:title",
                  content: pageTitle,
               },

               {
                  name: "og:description",
                  content: pageDescription,
               },
               {
                  name: "og:image",
                  content: ogImage,
               },
            ]}
         />
         <LocalBusinessJsonLd
            type="Store"
            id="https://www.grogrip.com/home"
            name="Grogrip Media"
            description="Boost YouTube growth with Grogrip: automation, SEO, content creation. Enhance online presence, drive targeted traffic. Expert strategies for success"
            url="https://www.grogrip.com/home"
            telephone="+1-123-456-7890"
            address={{
               streetAddress: "470 DLF PHASE V",
               addressLocality: "Sector 19",
               addressRegion: "Near Post Office",
               postalCode: "122016",
               addressCountry: "IN",
            }}
            geo={{
               latitude: "28.6446656",
               longitude: "77.3209443",
            }}
            images={["https://grogrip.com/favicon.ico"]}
            openingHours={[
               {
                  opens: "09:00",
                  closes: "18:00",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
               },
               {
                  opens: "10:00",
                  closes: "16:00",
                  dayOfWeek: "Saturday",
               },
            ]}
            makesOffer={[
               {
                  priceSpecification: {
                     type: "UnitPriceSpecification",
                     priceCurrency: "USD",
                     price: "200-400",
                  },
                  itemOffered: {
                     name: "Youtube Automation",
                     description: "Streamline YouTube with automation: optimize, schedule, engage. Maximize efficiency and growth on your channel. Unlock your YouTube potential now!",
                  },
               },
               {
                  priceSpecification: {
                     type: "UnitPriceSpecification",
                     priceCurrency: "USD",
                     price: "200-400",
                  },
                  itemOffered: {
                     name: "SEO",
                     description: "Dominate online with SEO: boost visibility, rank higher, drive traffic. Get expert optimization for top search engine results. Elevate your digital presence!",
                  },
               },
            ]}
         />
      </>
   );
};

export default SEO;