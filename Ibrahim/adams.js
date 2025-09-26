let cm = [];
const tabCmds = [];

// Simple event system
const ev = {
    events: {},
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((callback) => callback(data));
        }
    },
};

// Command registration function
function adams(obj, fonctions) {
    let infoComs = obj;
    if (!obj.categorie) infoComs.categorie = "General";
    if (!obj.reaction) infoComs.reaction = "🚀"; // Default reaction
    infoComs.fonction = fonctions;
    cm.push(infoComs);
    return infoComs;
}

module.exports = { adams, cm, ev };
