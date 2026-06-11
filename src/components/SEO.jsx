import { useEffect } from "react";

/**
 * SEO Component to handle dynamic page titles, meta tags, and structured JSON-LD schema
 */
const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  robots = "index, follow",
  schema
}) => {
  useEffect(() => {
    // 1. Update Title and standard title metadata
    if (title) {
      document.title = title;
      updateOrCreateMeta("meta[name='title']", { name: "title", content: title });
      updateOrCreateMeta("meta[property='og:title']", { property: "og:title", content: ogTitle || title });
      updateOrCreateMeta("meta[property='twitter:title']", { property: "twitter:title", content: ogTitle || title });
    }

    // 2. Update Description
    if (description) {
      updateOrCreateMeta("meta[name='description']", { name: "description", content: description });
      updateOrCreateMeta("meta[property='og:description']", { property: "og:description", content: ogDescription || description });
      updateOrCreateMeta("meta[property='twitter:description']", { property: "twitter:description", content: ogDescription || description });
    }

    // 3. Update Keywords
    if (keywords) {
      updateOrCreateMeta("meta[name='keywords']", { name: "keywords", content: keywords });
    }

    // 4. Update Robots
    if (robots) {
      updateOrCreateMeta("meta[name='robots']", { name: "robots", content: robots });
    }

    // 5. Update OG Type
    if (ogType) {
      updateOrCreateMeta("meta[property='og:type']", { property: "og:type", content: ogType });
    }

    // 6. Update OG Image
    if (ogImage) {
      // Ensure absolute URL if possible, or fallback to the relative path
      const absoluteImage = ogImage.startsWith("http")
        ? ogImage
        : `${window.location.origin}${ogImage}`;
      updateOrCreateMeta("meta[property='og:image']", { property: "og:image", content: absoluteImage });
      updateOrCreateMeta("meta[property='twitter:image']", { property: "twitter:image", content: absoluteImage });
    }

    // 7. Update OG URL and Canonical link
    const currentUrl = canonicalUrl || window.location.href;
    updateOrCreateMeta("meta[property='og:url']", { property: "og:url", content: currentUrl });
    updateOrCreateMeta("meta[property='twitter:url']", { property: "twitter:url", content: currentUrl });

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // 8. Handle dynamic schema (JSON-LD)
    let schemaScript = document.getElementById("dynamic-schema");
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "dynamic-schema";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonicalUrl, robots, schema]);

  const updateOrCreateMeta = (selector, attributes) => {
    try {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        Object.keys(attributes).forEach((key) => {
          element.setAttribute(key, attributes[key]);
        });
        document.head.appendChild(element);
      } else {
        Object.keys(attributes).forEach((key) => {
          element.setAttribute(key, attributes[key]);
        });
      }
    } catch (error) {
      console.error("Error setting meta tag:", error);
    }
  };

  return null;
};

export default SEO;
