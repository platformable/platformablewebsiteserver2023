import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutCommitments extends Schema.Component {
  collectionName: 'components_about_commitments';
  info: {
    displayName: 'commitments';
    icon: 'briefcase';
  };
  attributes: {
    commitment_text: Attribute.Text;
    commitment_img: Attribute.Media;
    commitment_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface BlogActCarousel extends Schema.Component {
  collectionName: 'components_blog_act_carousels';
  info: {
    displayName: 'act_carousel';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    step1: Attribute.String;
    step1_description: Attribute.Text;
    step2: Attribute.String;
    step2_description: Attribute.Text;
    step3: Attribute.String;
    step3_description: Attribute.Text;
    images: Attribute.Media;
  };
}

export interface BlogActToolComponent extends Schema.Component {
  collectionName: 'components_blog_act_tool_components';
  info: {
    displayName: 'Act Tool Component';
    icon: 'dashboard';
  };
  attributes: {
    tool: Attribute.String;
    link: Attribute.String;
    description: Attribute.Text;
    how_this_helps: Attribute.Text;
    why_we_recommend: Attribute.Text;
  };
}

export interface BlogFootnotes extends Schema.Component {
  collectionName: 'components_blog_footnotes';
  info: {
    displayName: 'footnotes';
    icon: 'book';
    description: '';
  };
  attributes: {
    footnote: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    subheading: Attribute.String;
  };
}

export interface DataGovernanceDgServices extends Schema.Component {
  collectionName: 'components_data_governance_dg_services';
  info: {
    displayName: 'dg_services';
    icon: 'cast';
  };
  attributes: {
    service: Attribute.String;
    service_img: Attribute.Media;
  };
}

export interface DataGovernanceProducts extends Schema.Component {
  collectionName: 'components_data_governance_products';
  info: {
    displayName: 'products';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    download: Attribute.String;
    bookbuybtn: Attribute.String;
    bookbuytn_url: Attribute.String;
    bookbuybtn_img: Attribute.Media;
    product_icon: Attribute.Media;
    btn_buy_enabled: Attribute.Boolean;
    btn_download_enabled: Attribute.Boolean;
  };
}

export interface DataProductsDataProductsProductsCard extends Schema.Component {
  collectionName: 'components_data_products_data_products_products_card';
  info: {
    displayName: 'data_products_products_card';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    data_products_product_name: Attribute.String;
    data_products_product_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    data_products_products_sample: Attribute.String;
    data_products_product_price_quarter: Attribute.Decimal;
    data_products_product_price_year: Attribute.Decimal;
    product_icon: Attribute.Media;
    btn_download_enabled: Attribute.Boolean;
    disclaimer: Attribute.Text;
    data_product_purchase_quarter: Attribute.String;
    data_product_purchase_year: Attribute.String;
    plausible_download_tracker: Attribute.String;
    plausible_purchase_quarter_tracker: Attribute.String;
    plausible_purchase_year_tracker: Attribute.String;
  };
}

export interface DatasetsDatasetsPruductsCard extends Schema.Component {
  collectionName: 'components_datasets_datasets_products_cards';
  info: {
    displayName: 'datasets_products_card';
    icon: 'cast';
    description: '';
  };
  attributes: {
    datasets_product_name: Attribute.String;
    datasets_datapoints: Attribute.String;
    datasets_specification: Attribute.String;
    datasets_bulk_download: Attribute.String;
    datasets_api: Attribute.String;
    product_icon: Attribute.Media;
    btn_download_enabled: Attribute.Boolean;
    btn_buy_enabled: Attribute.Boolean;
    plausible_download_tracker: Attribute.String;
    plausible_buy_tracker: Attribute.String;
  };
}

export interface GeneralBentoBox extends Schema.Component {
  collectionName: 'components_general_bento_boxes';
  info: {
    displayName: 'bentoBox';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media;
    mainColor: Attribute.String;
    textColor: Attribute.String;
    backgroundColor: Attribute.String;
  };
}

export interface GeneralCallToAction extends Schema.Component {
  collectionName: 'components_general_call_to_actions';
  info: {
    displayName: 'callToAction';
    icon: 'car';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    primaryCallToAction: Attribute.String;
    secondaryCallToAction: Attribute.String;
  };
}

export interface GeneralFindMore extends Schema.Component {
  collectionName: 'components_general_find_mores';
  info: {
    displayName: 'find more';
    icon: 'archive';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface GeneralHero extends Schema.Component {
  collectionName: 'components_general_heroes';
  info: {
    displayName: 'hero';
    icon: 'archive';
    description: '';
  };
  attributes: {
    SeoKeyword: Attribute.String;
    bigHeadline: Attribute.String;
    subHeadline: Attribute.String;
    primaryCallToAction: Attribute.String;
    secondaryCallToAction: Attribute.String;
    image: Attribute.Media;
    headingColor: Attribute.String;
    primaryCallToActionBgColor: Attribute.String;
    secondaryCallToActionBgColor: Attribute.String;
    BigHeadlineTextColor: Attribute.String;
    subHeadlineTextColor: Attribute.String;
    primaryCallToActionUrl: Attribute.String;
    secondaryCallToActionUrl: Attribute.String;
    primaryCallToActionBorderColor: Attribute.String;
    secondaryCallToActionBorderColor: Attribute.String;
    socialHeading: Attribute.String;
    socialSubheading: Attribute.String;
    primaryCallToActionTextColor: Attribute.String;
    secondaryCallToActionTextColor: Attribute.String;
  };
}

export interface GeneralListCardDescription extends Schema.Component {
  collectionName: 'components_general_list_card_descriptions';
  info: {
    displayName: 'list_card_description';
    icon: 'monitor';
  };
  attributes: {
    list_card_description_img: Attribute.Media;
    list_card_description_product_name: Attribute.String;
    list_card_description_button_text: Attribute.String;
    list_card_description_description: Attribute.Text;
    list_card_description_options: Attribute.String;
    list_card_description_is_costumizable: Attribute.Boolean;
    list_card_description_options_text: Attribute.Text;
  };
}

export interface GeneralListItemCard extends Schema.Component {
  collectionName: 'components_general_list_item_cards';
  info: {
    displayName: 'list_item_card';
    icon: 'monitor';
  };
  attributes: {
    list_item_card_img: Attribute.Media;
    list_item_card_text: Attribute.Text;
  };
}

export interface GeneralPricingCard extends Schema.Component {
  collectionName: 'components_general_pricing_cards';
  info: {
    displayName: 'pricingCard';
    icon: 'apps';
    description: '';
  };
  attributes: {
    price: Attribute.String;
    discountText: Attribute.String;
    description: Attribute.Component<'general.list-card-description', true>;
    callToActionMain: Attribute.String;
    callToActionMainUrl: Attribute.String;
    callToActionMainBgColor: Attribute.String;
    callToActionMainTextColor: Attribute.String;
    callToActionSecondary: Attribute.String;
    callToActionSecondaryUrl: Attribute.String;
    callToActionSecondaryBgColor: Attribute.String;
    callToActionSecondaryTextColor: Attribute.String;
    callToActionMainBorderColor: Attribute.String;
    callToActionSecondaryBorderColor: Attribute.String;
  };
}

export interface GeneralPricing extends Schema.Component {
  collectionName: 'components_general_pricings';
  info: {
    displayName: 'pricing';
    icon: 'gift';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    description: Attribute.Text;
    mainColor: Attribute.Text;
    backgroundColor: Attribute.Text;
    price: Attribute.Component<'general.pricing-card', true>;
  };
}

export interface GeneralProductCarousel extends Schema.Component {
  collectionName: 'components_general_product_carousels';
  info: {
    displayName: 'product_carousel';
    icon: 'bulletList';
  };
  attributes: {
    product_carousel_product_name: Attribute.String;
    product_carousel_title: Attribute.String;
    product_carousel_description: Attribute.Text;
    product_carousel_images: Attribute.Media;
    product_carousel_button: Attribute.String;
  };
}

export interface GeneralTestimonials extends Schema.Component {
  collectionName: 'components_general_testimonials';
  info: {
    displayName: 'testimonials';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    name: Attribute.String;
    position: Attribute.String;
    image: Attribute.Media;
    textColor: Attribute.String;
    nameColor: Attribute.String;
    positionColor: Attribute.String;
    testimonialSectionBgColor: Attribute.String;
    testimonialsCardBorderColor: Attribute.String;
    testimonialsCardBgColor: Attribute.String;
    testimonialsNextBackBtnBgColor: Attribute.String;
  };
}

export interface GeneralVerticalDescriptionCard extends Schema.Component {
  collectionName: 'components_general_vertical_description_cards';
  info: {
    displayName: 'vertical_description_card';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    vertical_description_card_title: Attribute.String;
    vertical_description_card_button_text: Attribute.String;
    sector_values: Attribute.Component<'homepage.sector-values', true>;
  };
}

export interface GeneralWhatsIncludedContent extends Schema.Component {
  collectionName: 'components_general_whats_included_contents';
  info: {
    displayName: 'whatsIncludedContent';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface GeneralWhatsIncluded extends Schema.Component {
  collectionName: 'components_general_whats_includeds';
  info: {
    displayName: 'whatsIncluded';
    icon: 'archive';
    description: '';
  };
  attributes: {
    companyName: Attribute.String;
    heading: Attribute.String;
    whatsIncludedContent: Attribute.Component<
      'general.whats-included-content',
      true
    >;
    companyNameColor: Attribute.String;
    whatsIncludedMainColor: Attribute.String;
    whatsIncludedTextColor: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HomepageSectorValues extends Schema.Component {
  collectionName: 'components_homepage_sector_values';
  info: {
    displayName: 'sector_values';
    icon: 'monitor';
  };
  attributes: {
    sector_value_text: Attribute.String;
  };
}

export interface HomepageTestimonials extends Schema.Component {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'testimonials';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    testimonials_img: Attribute.Media;
    testimonials_clientname: Attribute.String;
    testimonials_client_role: Attribute.String;
    testimonials_text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    url: Attribute.String;
  };
}

export interface OpenEcosystemsSolutions extends Schema.Component {
  collectionName: 'components_open_ecosystems_solutions';
  info: {
    displayName: 'solutions';
    icon: 'cube';
  };
  attributes: {
    icon: Attribute.Media;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ProductLandingPageActionableInformationCard
  extends Schema.Component {
  collectionName: 'components_product_landing_page_actionable_information_cards';
  info: {
    displayName: 'actionable_information_card';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ProductLandingPageBenefitsPersonas extends Schema.Component {
  collectionName: 'components_product_landing_page_benefits_personas';
  info: {
    displayName: 'benefits_personas';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    persona_title: Attribute.String;
    persona_image: Attribute.Media;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBaloon';
        }
      >;
    buy_button: Attribute.String;
  };
}

export interface ProductLandingPageBenefits extends Schema.Component {
  collectionName: 'components_product_landing_page_benefits';
  info: {
    displayName: 'benefits';
    icon: 'bulletList';
  };
  attributes: {
    benefit_title: Attribute.String;
    benefit_description: Attribute.Text;
  };
}

export interface ProductLandingPageDiscoverCard extends Schema.Component {
  collectionName: 'components_product_landing_page_discover_cards';
  info: {
    displayName: 'discover_card';
    icon: 'calendar';
  };
  attributes: {
    persona: Attribute.Component<'product-landing-page.benefits-personas'>;
    benefits: Attribute.Component<'product-landing-page.benefits', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.commitments': AboutCommitments;
      'blog.act-carousel': BlogActCarousel;
      'blog.act-tool-component': BlogActToolComponent;
      'blog.footnotes': BlogFootnotes;
      'data-governance.dg-services': DataGovernanceDgServices;
      'data-governance.products': DataGovernanceProducts;
      'data-products.data-products-products-card': DataProductsDataProductsProductsCard;
      'datasets.datasets-pruducts-card': DatasetsDatasetsPruductsCard;
      'general.bento-box': GeneralBentoBox;
      'general.call-to-action': GeneralCallToAction;
      'general.find-more': GeneralFindMore;
      'general.hero': GeneralHero;
      'general.list-card-description': GeneralListCardDescription;
      'general.list-item-card': GeneralListItemCard;
      'general.pricing-card': GeneralPricingCard;
      'general.pricing': GeneralPricing;
      'general.product-carousel': GeneralProductCarousel;
      'general.testimonials': GeneralTestimonials;
      'general.vertical-description-card': GeneralVerticalDescriptionCard;
      'general.whats-included-content': GeneralWhatsIncludedContent;
      'general.whats-included': GeneralWhatsIncluded;
      'homepage.sector-values': HomepageSectorValues;
      'homepage.testimonials': HomepageTestimonials;
      'open-ecosystems.solutions': OpenEcosystemsSolutions;
      'product-landing-page.actionable-information-card': ProductLandingPageActionableInformationCard;
      'product-landing-page.benefits-personas': ProductLandingPageBenefitsPersonas;
      'product-landing-page.benefits': ProductLandingPageBenefits;
      'product-landing-page.discover-card': ProductLandingPageDiscoverCard;
    }
  }
}
