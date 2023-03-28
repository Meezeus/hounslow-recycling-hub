export type RecyclingService = {
  itemImage: string;
  title: string;
  id: string;
  binImage: string;
  description: string;
  content: string;
  infographicImage: string;
  link: string;
  isHouse: boolean;
};

export const houseRecyclingServices = [
  {
    itemImage: "./plastic_metal_items.png",
    title: "Plastic and Metal Recycling Service",
    id: "plastic-and-metal-recycling-service",
    binImage: "./red_recycling_box.png",
    description:
      "Plastic and metal can be recycled using the red recycling box.",
    content:
      "**How:** The recycling process takes place weekly with collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am on the collection day and ensure that all items have been washed, squashed and with lids included for plastics. ",
    infographicImage: "/red_recycling_box_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1597/plastic_recycling_in_your_red_box",
  },
  {
    itemImage: "./paper_card_item.png",
    title: "Paper and Card Recycling Service",
    id: "paper-and-card-recycling-service",
    binImage: "./blue_recycling_box.png",
    description:
      "Paper and cardboard can be recycled using the blue recycling box.",
    content:
      "**How:** The recycling process takes place weekly with collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am on the collection day and ensure that all items have been loosely placed inside. ",
    infographicImage: "/blue_recycling_box_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1598/paper_and_card_recycling_in_your_blue_box",
  },
  {
    itemImage: "./glass_items.png",
    title: "Glass Recycling Service",
    id: "glass-recycling-service",
    binImage: "./green_recycling_box.png",
    description: "Glass can be recycled using the green recycling box.",
    content:
      "**How:** The recycling process takes place weekly with collection between 7am and 5pm. " +
      "You should place the box at the front edge of your property by 7am on the collection day. ",
    infographicImage: "/green_recycling_box_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1599/glass_recycling_in_your_green_box",
  },
  {
    itemImage: "./food_items.png",
    title: "Food Waste Recycling Service",
    id: "food-waste-recycling-service",
    binImage: "./food_waste_bin.png",
    description: "Food can be recycled using the green food waste bin.",
    content:
      "**How:** The recycling process takes place weekly with collection between 7am and 5pm.  \n" +
      "&nbsp;  \n" +
      "You will be provided with two bins with lids: a 7-litre caddy for kitchen use and a 25-litre collection bin. " +
      "You should move all your food waste into the 25-litre collection bin once your 7-litre caddy is full.  \n" +
      "&nbsp;  \n" +
      "The 25-litre collection bin should be locked (such that the handle is left either in the upright position " +
      "or completely forward and down) and placed at the front edge of your property by 7am on the collection day to be collected.  \n" +
      "&nbsp;  \n" +
      "Both bins should be lined with a biodegradable food waste bag. " +
      "Do not use plastic bags in either of the bins. ",
    infographicImage: "/food_waste_bin_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1602/food_waste_recycling",
  },
  {
    itemImage: "./garden_items.png",
    title: "Garden Waste Service",
    id: "garden-waste-recycling-service",
    binImage: "./brown_wheeled_bin.png",
    description: "Garden waste can be recycled using the brown wheeled bin.",
    content:
      "**How:** This is an annual subscription service ([sign-up here](https://www.hounslow.gov.uk/xfp/form/429)) that lasts from 1st April to 31st March for a fee of £65.00. " +
      "Alternatively, a £35.40 half-year subscription can be made that runs between 1st October and 31st March.  \n" +
      "&nbsp;  \n" +
      "You can cancel the service anytime but a refund will only be issued within the first 14 days of your subscription and only if you have not yet received the bin/s (or sacks).  \n" +
      "&nbsp;  \n" +
      "A total of 25 collections will be made for a yearly subscription (i.e. takes place every two weeks excluding the Christmas period). " +
      "You will be provided with a 240-litre brown bin. " +
      "On the collection day, you must place the bin at the gate of your property before 7.00am. ",
    infographicImage: "./garden_waste_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1830/garden_waste_collections_202223",
  },
  {
    itemImage: "./general_items.png",
    title: "General Waste Collection Service",
    id: "general-waste-collection-service",
    binImage: "./black_wheeled_bin.png",
    description:
      "Rubbish that cannot be recycled can be disposed of using the black wheeled bin.",
    content:
      "**What can be collected:** Plastic carrier bags, plastic wrapping and packaging, polystyrene, nappies, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection process takes place every two weeks with collection between 7am and 5pm.  \n" +
      "&nbsp;  \n" +
      "You will be given a 140-litre wheelie bin. " +
      "There are alternative options where you can use either a larger 240-litre bin (subject to approval) or up to 3 black sacks.  \n" +
      "&nbsp;  \n" +
      "The bin should be placed at the front edge of your property by 7am on the collection day.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** It is not recommended to put any recyclable items into this bin. ",
    link: "https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1603/household_waste",
  },
  {
    itemImage: "./textiles_items.png",
    title: "Textile Recycling Service",
    id: "textile-recycling-service",
    binImage: "./tied_carrier_bag_1.png",
    description:
      "Textiles and clothing can be recycled using a tied carrier bag.",
    content:
      "**What can be recycled:** Bags, clothes, curtains, paired shoes, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the tied carrier bag at the front edge of your property by 7am " +
      "and ensure it is placed alongside your other recycling boxes.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Duvets, pillows (their covers and cases are still acceptable), etc.  \n" +
      "&nbsp;  \n" +
      "**Alternatives:** There are additional opportunities to get your textile waste recycled, which are " +
      "[TRAID charity](https://www.traid.org.uk/book-a-collection/) and " +
      "[Salvation Army Textile Banks](https://www.salvationarmydonationcentre.org/bank-finder). ",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1600/clothing_textiles_and_shoe_recycling",
  },
  {
    itemImage: "./small_electricals_items.png",
    title: "Small Electrical Items Recycling Service",
    id: "small-electrical-items-recycling-service",
    binImage: "./tied_carrier_bag_2.png",
    description:
      "Small electrical items can be recycled using a tied carrier bag.",
    content:
      "**What can be recycled:** Telephones, cameras, CD/DVD players, hairdryers, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** The recycling process takes place weekly with the collection between 7am and 5pm. " +
      "You should place the tied carrier bag at the front edge of your property by 7am on the collection day " +
      "and ensure it is placed alongside your other recycling boxes. " +
      "Moreover, items must have electrical leads contained inside the bag and batteries removed.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Any items that cannot fit in a standard carrier bag or include batteries.  \n" +
      "&nbsp;  \n" +
      "**Alternatives:** You can also utilise [TRAID charity](https://www.traid.org.uk/book-a-collection/) " +
      "as an alternative opportunity to get your small electrical appliances recycled. ",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/1601/small_electrical_and_electronic_appliance_recycling",
  },
  {
    itemImage: "./bulky_waste_items.png",
    title: "Bulky Waste Collection Service",
    id: "bulky-waste-collection-service",
    description:
      "Large electrical items, furniture and any items too large to fit in a regular bin can be recycled using the Bulky Waste Collection Service.",
    content:
      "**What can be recycled:** Broken furniture, fridges, unused bedding, bicycles, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** It is recommended to wait until you have 5 items to recycle, " +
      "as this is what the minimum charge applies to (£40 for individuals and £70 for landlords). " +
      "The price then gets incremented per additional item (£8 for individuals and £14 for landlords).  \n" +
      "&nbsp;  \n" +
      "You should book a collection day in advance via phone (call 020 8583 5555 and select option 1). " +
      "The collection process takes place anytime between 7am and 3pm on the chosen day. " +
      "Please place your items at the agreed collection point (i.e. either the front garden or driveway).  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Garden waste, pianos, tyres, etc.  \n" +
      "&nbsp;  \n" +
      "Items placed at locations other than the agreed upon collection point and heavy items (i.e. cannot be lifted by two people) will not be collected either.  \n" +
      "&nbsp;  \n" +
      "**Alternatives:** You can donate your bulky waste items (if they are in a good condition) using the " +
      "[Hounslow Furniture Recycling Project](https://hounslowconnect.com/services/furniture-recycling).",
    link: "https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/30/tidy_town_bulky_waste_collection",
  },
  /*{
    itemImage: "./large_electrical_items.png",
    title: "Hounslow Furniture Recycling Project",
    id: "hounslow-furniture-recyling-project",
    binImage:"./large_electrical_items.png",
    description:
      "The Hounslow Furniture Recycling Project is dedicated to redistributing reusable furniture and electrical household appliances to those who may otherwise struggle to afford such items.",
    content:
      "**What can be recycled:** This service mainly collects mattresses, wardrobes, fridges, microwave ovens and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection can be booked via phone (020 8814 2225) or email (collections@hounslowct.org.uk) and will run during weekdays between 10am to 1.30pm and 2pm to 4.30pm. " +
      "The price starts at £10 for 5 items that are in good condition and with a Fire Regulations Label attached for upholstered items (those that do not meet either of the criteria will not be collected). " +
      "The recycled items are all displayed in a showroom in Isleworth. " +
      "There are two daily deliveries and the items on display change every day. " +
      "It is recommended to call the project team (020 8892 4916) in advance to visit the showroom and purchase a particular item if you need to travel a long distance.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Small electrical items and flat packed and dismantled furniture cannot be collected.  \n" +
      "&nbsp;  \n" +
      "[Link for more details](https://hounslowconnect.com/services/furniture-recycling).",
  },*/
  {
    itemImage: "./clinical_waste_items.png",
    title: "Clinical Waste Collection Service",
    id: "clinical-waste-collection-service",
    description:
      "Waste that is considered hazardous and can be infectious to others can be disposed of using the Clinical Waste Collection Service.",
    content:
      "**What can be collected:** Hypodermic needles, blood, human tissue, equipment left over after treatment or operation, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** This is a free-of-charge service but approval must be granted by your Medical Professional via filling out " +
      "a [clinical waste referral form](https://www.hounslow.gov.uk/downloads/file/555/clinical_waste_referral_form), " +
      "or asking your Medical Professional to put you in contact with Medisort directly.  \n" +
      "&nbsp;  \n" +
      "Items will be collected together with other types of household waste on the pre-booked collection day " +
      "but they should be free from excess liquid and separately placed for safety reasons.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** Nappies, sanitary protection, incontinence pads, etc.  \n" +
      "&nbsp;  \n" +
      "This type of waste is classed as offensive or hygiene waste. " +
      "They are predominantly non-infectious, hence do not require treatment.  \n" +
      "&nbsp;  \n" +
      "These items should be securely tied in a black sack and placed with your household rubbish on the morning of your rubbish collection day. " +
      "Please ensure this type of waste is properly wrapped and free from excess liquid. ",
    link: "https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1527/clinical_waste",
  },
];

export const flatRecyclingServices = [
  {
    itemImage: "./plastic_items.png",
    title: "Plastic Recycling Service",
    id: "plastic-recycling-service",
    binImage: "./plastic_communal_bin.png",
    description:
      "Plastic can be recycled using a communal bin with a red 'household plastic packaging' label.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been washed, squashed, with lids included, and loosely placed inside the bin. ",
    infographicImage: "./plastic_communal_bin_infographics.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat",
  },
  {
    itemImage: "./metal_items.png",
    title: "Metal Recycling Service",
    id: "metal-recycling-service",
    binImage: "./metal_communal_bin.png",
    description:
      "Metal can be recycled using a communal bin with a grey 'tins, cans & aerosols' label.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been loosely placed inside the bin. ",
    infographicImage: "/metal_communal_bin_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat",
  },
  {
    itemImage: "./cardboard_item.png",
    title: "Card Recycling Service",
    id: "card-recycling-service",
    binImage: "./card_communal_bin.png",
    description:
      "Cardboard can be recycled using a communal bin with a blue 'cardboard' label.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been flattened and loosely placed inside the bin. ",
    infographicImage: "./card_communal_bin_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat",
  },
  {
    itemImage: "./paper_item.png",
    title: "Paper Recycling Service",
    id: "paper-recycling-service",
    binImage: "./paper_communal_bin.png",
    description:
      "Paper can be recycled using a communal bin with a blue 'paper' label.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been loosely placed inside the bin. ",
    infographicImage: "/paper_communal_bin_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat",
  },
  {
    itemImage: "./glass_item.png",
    title: "Glass Recycling Service",
    id: "glass-recycling-service",
    binImage: "./glass_communal_bin.png",
    description:
      "Glass can be recycled using a communal bin with a teal 'mixed glass' label.",
    content:
      "**How:** The recycling process takes place weekly. " +
      "Please ensure that all items have been loosely placed inside the bin. ",
    infographicImage: "/glass_communal_bin_infographic.png",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat",
  },
  {
    itemImage: "./food_item.png",
    title: "Food Waste Recycling Service",
    id: "food-waste-recycling-service",
    binImage: "./food_communal_bin.png",
    description:
      "Food waste can be recycled using a communal bin with a green 'food waste' label.",
    content:
      "**How:** The recycling process takes place weekly.  \n" +
      "&nbsp;  \n" +
      "You will be provided with a 7-litre caddy for kitchen use. " +
      "You should move all your food waste into the communal food bin once your caddy is full.  \n" +
      "&nbsp;  \n" +
      "Excess liquids and oils should be drained from the food waste beforehand, otherwise they will not be collected.  \n" +
      "&nbsp;  \n" +
      "The caddy should be lined with a biodegradable food waste bag. " +
      "Do not use plastic bags.  \n" +
      "&nbsp;  \n" +
      "**Note:** Not all flats have a food communal bin. " +
      "If your block or development does not currently have a food waste service and you are interested in this " +
      "please email **recycling@hounslow.gov.uk** with your managing agents details for us to make contact.",
    infographicImage: "./food_communal_bin_infographic.png",
  },
  {
    itemImage: "./general_item3.png",
    title: "General Waste Collection Service",
    id: "general-waste-collection-service",
    description:
      "Rubbish that cannot be recycled can be disposed of using the general waste communal bin.",
    content:
      "**What can be collected:** Plastic carrier bags, plastic wrapping and packaging, polystyrene, nappies, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection process takes place weekly.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** It is not recommended to put any recyclable items into this bin.",
  },
  {
    itemImage: "./textiles_item.png",
    title: "Textiles Recycling",
    id: "textiles-recycling",
    description: "Textiles and clothing can be donated to charity.",
    content:
      "**What can be donated:** Bags, clothes, curtains, paired shoes, and others in good condition.  \n" +
      "&nbsp;  \n" +
      "**How:** You can utilise [TRAID charity](https://www.traid.org.uk/book-a-collection/) and " +
      "[Salvation Army Textile Banks](https://www.salvationarmydonationcentre.org/bank-finder) to get your textiles recycled. ",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat/2",
  },
  {
    itemImage: "./small_electricals_item2.png",
    title: "Small Electrical Items Recycling",
    id: "small-electrical-items-recycling",
    description: "Small electrical items can be donated to charity.",
    content:
      "**What can be donated:** Telephones, cameras, CD/DVD players, hairdryers, and others in good condition.  \n" +
      "&nbsp;  \n" +
      "**How:** You can utilise [TRAID charity](https://www.traid.org.uk/book-a-collection/) as an opportunity " +
      "to get your small electrical appliances recycled. ",
    link: "https://www.hounslow.gov.uk/info/20128/household_recycling_and_waste_collections/24/recycling_and_rubbish_collections_from_your_flat/2",
  },
  {
    itemImage: "./bulky_waste_item2.png",
    title: "Bulky Waste Collection Service",
    id: "bulky-waste-collection-service",
    description:
      "Large electrical items, furniture and any items too large to fit in a regular bin can be recycled using the Bulky Waste Collection Service.",
    content:
      "**What can be recycled:** Broken furniture, fridges, unused bedding, bicycles, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** It is recommended to wait until you have 5 items to recycle, " +
      "as this is what the minimum charge applies to (£40 for individuals and £70 for landlords). " +
      "The price then gets incremented per additional item (£8 for individuals and £14 for landlords).  \n" +
      "&nbsp;  \n" +
      "You should book a collection day in advance via phone (call 020 8583 5555 and select option 1). " +
      "The collection process takes place anytime between 7am and 3pm on the chosen day.  \n" +
      "&nbsp;  \n" +
      "Please place your items at the agreed collection point (you will need your managing agent's approval to store your waste in a communal area before calling us to book a collection). " +
      "Please clearly label the items with the date of collection and service request number which will be provided upon booking.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Garden waste, pianos, tyres, etc.  \n" +
      "&nbsp;  \n" +
      "Items placed at locations other than the agreed upon collection point and heavy items (i.e. cannot be lifted by two people) will not be collected either.  \n" +
      "&nbsp;  \n" +
      "**Alternatives:** You can donate your bulky waste items (if they are in a good condition) using the " +
      "[Hounslow Furniture Recycling Project](https://hounslowconnect.com/services/furniture-recycling).",
    link: "https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/30/tidy_town_bulky_waste_collection",
  },
  /*{
    itemImage:"",
    title: "Hounslow Furniture Recycling Project",
    id: "hounslow-furniture-recycling-project",
    binImage:"",
    description:
      "The Hounslow Furniture Recycling Project is dedicated to redistributing reusable furniture and electrical household appliances to those who may otherwise struggle to afford such items.",
    content:
      "**What can be recycled:** This service mainly collects mattresses, wardrobes, fridges, microwave ovens and so on.  \n" +
      "&nbsp;  \n" +
      "**How:** The collection can be booked via phone (020 8814 2225) or email (collections@hounslowct.org.uk) and will run during weekdays between 10am to 1.30pm and 2pm to 4.30pm. " +
      "The price starts at £10 for 5 items that are in good condition and with a Fire Regulations Label attached for upholstered items (those that do not meet either of the criteria will not be collected). " +
      "The recycled items are all displayed in a showroom in Isleworth. " +
      "There are two daily deliveries and the items on display change every day. " +
      "It is recommended to call the project team (020 8892 4916) in advance to visit the showroom and purchase a particular item if you need to travel a long distance.  \n" +
      "&nbsp;  \n" +
      "**What cannot be recycled:** Small electrical items and flat packed and dismantled furniture cannot be collected.  \n" +
      "&nbsp;  \n" +
      "[Link for more details](https://hounslowconnect.com/services/furniture-recycling).",
  },*/
  {
    itemImage: "./clinical_waste_items.png",
    title: "Clinical Waste Collection Service",
    id: "clinical-waste-collection-service",
    description:
      "Waste that is considered hazardous and can be infectious to others can be disposed of using the Clinical Waste Collection Service.",
    content:
      "**What can be collected:** Hypodermic needles, blood, human tissue, equipment left over after treatment or operation, etc.  \n" +
      "&nbsp;  \n" +
      "**How:** This is a free-of-charge service but approval must be granted by your Medical Professional via filling out " +
      "a [clinical waste referral form](https://www.hounslow.gov.uk/downloads/file/555/clinical_waste_referral_form), " +
      "or asking your Medical Professional to put you in contact with Medisort directly.  \n" +
      "&nbsp;  \n" +
      "Items will be collected together with other types of household waste on the pre-booked collection day " +
      "but they should be free from excess liquid and separately placed for safety reasons.  \n" +
      "&nbsp;  \n" +
      "**What cannot be collected:** Nappies, sanitary protection, incontinence pads, etc.  \n" +
      "&nbsp;  \n" +
      "This type of waste is classed as offensive or hygiene waste. " +
      "They are predominantly non-infectious, hence do not require treatment.  \n" +
      "&nbsp;  \n" +
      "These items should be securely tied in a black sack and placed with your household rubbish on the morning of your rubbish collection day. " +
      "Please ensure this type of waste is properly wrapped and free from excess liquid. ",
    link: "https://www.hounslow.gov.uk/info/20002/recycling_and_rubbish/1527/clinical_waste",
  },
];
