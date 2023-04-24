// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README




module.exports = {
    renderLicenseBadge(license) {
      const licenseBadges = {
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
      }
      for(var key in licenseBadges) {
        if (key === license) {
          return licenseBadges[key];
        }
      }
    },
  
   
  
    generateMarkdown(data) {
  
      let licenseBadge = this.renderLicenseBadge(data.license);
  
      return `# ${data.title} \n
${licenseBadge} \n
# Description \n ${data.description}  \n
# Table of Contents \n ${data.tableofcontents} \n
# Installation \n ${data.installation}  \n
# Usage \n ${data.usage}  \n
# License \n This content is under the ${data.license} license  \n
# Contributors \n ${data.contributors}  \n
# Testing \n ${data.testing}  \n
# Questions \n 
Contact Me: \n 
${data.email} \n
github.com/${data.github}`;
    },
  
  }
  
  // return `# ${data.title} \n
  //    ${licenseBadge} \n
  //   + # Description \n ${data.description}` + "\n" 
  //   + `# Table of Contents \n ${data.tableofcontents}` + "\n"
  //   + `# Installation \n ${data.installation}` + "\n"
  //   + `# Usage \n ${data.usage}` + "\n"
  //   + `# License \n This content is under the ${data.license} license` + "\n"
  //   + `# Contributors \n ${data.contributors}` + "\n"
  //   + `# Testing \n ${data.testing}` + "\n"
  //   + `# Questions \n Contact Me: \n ${data.email} \n github.com/${data.github} `;
  //   },