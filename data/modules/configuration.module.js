import mockConfig from './mock-config.json';
import partnerList from '../static-data/partners.json';
import locations from '../static-data/locations.json';
export const getConfiguration = (domain) => {

    var configs = mockConfig["payload"].filter(f => Object.values(partnerList).map(m => `advertisement_configuration_${m}_${domain}`).includes(f.id));

    configs.forEach(function(c) {
        c.configurations.forEach(function(o) {
            o.toString = function configurationToString() {
                if (o.location != undefined) {
                    return `Location: ${locations[o.location]}, Status: ${o.status
                        ? "Enabled"
                        : "Disabled"}`
                } else if (o.deviceFamily != undefined) {
                    return `Device Family ${o.deviceFamily}, Status: ${o.status
                        ? "Enabled"
                        : "Disabled"}`
                } else {
                    return `Browser Name: ${o.browserName}, Versions: ${o.minVersion}-${o.maxVersion}, Status: ${o.status
                        ? "Enabled"
                        : "Disabled"}`
                }
            }
        })
    });

    return configs;
}

export default getConfiguration;
