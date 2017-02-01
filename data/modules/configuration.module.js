import mockConfig from './mock-config.json';
import partnerList from '../static-data/partners.json';
import locations from '../static-data/locations.json';
import _ from 'lodash';
import domainList from '../static-data/domains.json';

class CampaignConfiguration {
    constructor(c) {
        this.campaign = c.campaign;
        this.checked = c.checked;
        this.domain = c.domain;
        this.enabled = c.enabled;
        this.id = c.id;
        this.browserConfigurations = _.map(_.filter(c.configurations, 'browserName'), function(m) {
            return new BrowserConfiguration(m);
        });
        this.locationConfigurations = _.map(_.filter(c.configurations, 'location'), function(m) {
            return new LocationConfiguration(m);
        });
        this.deviceConfigurations = _.map(_.filter(c.configurations, 'deviceFamily'), function(m) {
            return new DeviceConfiguration(m);
        });
    }
}

class LocationConfiguration {
    constructor(l) {
        this.location = l.location;
        this.status = l.status;
    }
    toString() {
        return `Location: ${locations[this.location]}, Status: ${this.status
            ? "Enabled"
            : "Disabled"}`;
    }
}

class DeviceConfiguration {
    constructor(d) {
        this.deviceFamily = d.deviceFamily;
        this.status = d.status;
    }
    toString() {
        `Device Family ${this.deviceFamily}, Status: ${this.status
            ? "Enabled"
            : "Disabled"}`;

    }
}

class BrowserConfiguration {
    constructor(d) {
        this.browserName = d.browserName;
        this.minVersion = d.minVersion;
        this.maxVersion = d.maxVersion;
        this.status = d.status;
    }

    toString() {
        return `Browser Name: ${this.browserName}, Versions: ${this.minVersion}-${this.maxVersion}, Status: ${this.status
            ? "Enabled"
            : "Disabled"}`
    }
}

export const getConfiguration = (domain) => {
    var configuration = mockConfig["payload"].filter(f => Object.values(partnerList).map(m => `advertisement_configuration_${m}_${domain}`).includes(f.id));
    return _.map(configuration, function(m) {
        return new CampaignConfiguration(m)
    });
}

export default getConfiguration;
