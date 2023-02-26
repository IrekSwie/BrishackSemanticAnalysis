// Select all the text nodes on the page
const textNodes = document.evaluate('//text()', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

// Loop through each text node and set its font weight to "bold"
for (let i = 0; i < textNodes.snapshotLength; i++) {
  const textNode = textNodes.snapshotItem(i);
  textNode.parentNode.style.fontWeight = 'bold';
}