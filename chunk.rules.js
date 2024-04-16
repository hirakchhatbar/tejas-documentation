const pages = [
    "src/components/Login",
    "src/components/Dashboard",
    "src/components/Offers/Offers",
    "src/components/Offers/CreateOffer",
    "src/components/GlobalConfiguration/GlobalConditions",
    "src/components/Statistics",
];

const applyChunkRule = (id) => {
    id = id.replace("Advertisers", "AdvClients");

    if (id.includes("src/assets/Scss"))
        return "styles/" + id.split("src/assets/Scss/")[1].split("/")[0];

    if (id.includes("node_modules"))
        return "vendors/" + id.split("node_modules/")[1].split("/")[0];

    if (id.includes("src/components/common"))
        return "layouts/" + id.split("src/components/common/")[1].split("/")[0];

    if (id.includes("src/components/ui"))
        return "primitives/" + id.split("src/components/ui/")[1];

    if (id.includes("src/store-apis")) return "redux";

    if (id.includes("src/components/")) {
        const page = pages.find((page) => id.includes(page));
        if (page) {
            return "pages/" + page.split("src/components/")[1];
        } else {
            return "miscellaneous/" + id.split("src/components/")[1].split("/")[0];
        }
    }

    if (id.includes("src/") && id.endsWith(".js"))
        return "miscellaneous/" + id.split("src/")[1];
};

export default applyChunkRule;
