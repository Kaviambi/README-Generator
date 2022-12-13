

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache 2.0'){
    badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if(license === 'MIT'){
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Boost 1.0'){
    badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  } else if (license === 'MPL 2.0'){
    badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else {
    badge = ``
  }
return badge;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'Apache 2.0'){
    licenseLink = `https://opensource.org/licenses/Apache-2.0`
  } else if(license === 'MIT'){
    licenseLink = `https://opensource.org/licenses/MIT`
  } else if (license === 'Boost 1.0'){
    licenseLink = `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license === 'MPL 2.0'){
    licenseLink = `https://opensource.org/licenses/MPL-2.0`
  } else {
    licenseLink = ''
  }
return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'none'){
    licenseSection = '';
  }else {
    licenseSection = `license: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ##${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ###${renderLicenseLink(data.license)}
  

  ## Description
  ${data.description}

  ## Table of Contents
  ###-[Installation] (#installation)
  ###-[Usuage] (#usuage)
  ###-[License] (#license)
  ###-[Contribution] (#contribution)
  ###-[Test] (#test)
  ###-[Questions](#question)

  ## Installation 
  ${data.installation}

  ## Usuage
  ${data.usuage}

  ## License 
  ${data.license}

  ## Contribution 
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  ${data.question}
`;
}

module.exports = generateMarkdown;
