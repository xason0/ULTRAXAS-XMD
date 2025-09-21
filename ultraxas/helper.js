const NEWS_LETTER_JID = "120363418485111392@newsletter"; // Replace with your real one
const BOT_NAME = "ULTRAXAS XMD";
const DEFAULT_THUMBNAIL = "https://res.cloudinary.com/dptzpfgtm/image/upload/v1753723388/whatsapp_uploads/wqyliw4kzvrulh0bmg10.jpg";

const createContext = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid], // Tag user if needed
        forwardingScore: 999,
        isForwarded: true,
        businessMessageForwardInfo: {
            businessOwnerJid: NEWS_LETTER_JID, // Helps add verified feel
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: options.newsletterName || BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000)
        },
        externalAdReply: {
            title: options.title || BOT_NAME,
            body: options.body || "Premium WhatsApp Bot Solution by UltraXas",
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL,
            mediaType: 1,
            mediaUrl: options.mediaUrl || undefined,
            sourceUrl: options.sourceUrl || "https://wa.me/447405817307", // link to bot or business
            showAdAttribution: true,
            renderLargerThumbnail: false 
        }
    }
});

module.exports = {
    createContext
};
