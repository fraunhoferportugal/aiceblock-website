# AICeBlock Website

Welcome to the official repository for the AICeBlock website.

AICeBlock is an innovative technological venture dedicated to advancing AI and blockchain technologies. Stay tuned for exciting updates and developments.

## Configuration

An `.env` file is required with `WEB3FORMS_ACCESS_KEY` set to the API key provided by [Web3Forms](https://web3forms.com) upon registration. This is important to receive contacts from the "Contact Us" form and newsletter subscription requests.

## Development

This project uses the [Jekyll](https://jekyllrb.com) framework, and therefore, it is required that Jekyll be installed on your local machine to set up the project locally.

The repository is organized into the following directories:

- **`_data`** - Contains YAML files with all the content used across the site. Each component or page can be configured accordingly within these files.
- **`_includes`** - Houses reusable HTML components that are included in the various layouts or pages. This allows for modularity and efficient code reuse.
- **`_layouts`** - Contains the layout templates for the pages, including common elements such as headers, footers, and global styles. Layouts define the general structure and require assets such as fonts, CSS, and scripts (if applicable).
- **`_sass`** - Contains SCSS partials that define the site's styles. These partials are imported into the main stylesheet and compiled by Jekyll into a single CSS file.
- **`assets`** - Stores all media files such as images, icons, and JavaScript. In this project, JavaScript files are not stored here. Instead, each component includes its own small scripts as needed, ensuring that unnecessary scripts are not loaded.
- **`base_dir`** - Contains the Markdown files that define the individual pages of the site. Each page specifies which layout it uses and which components are incorporated within that page.

## Deployment

The website is currently hosted via GitHub Pages. If you wish to deploy it elsewhere or need to make any modifications to the deployment process, please refer to the [Jekyll documentation](https://jekyllrb.com/docs/step-by-step/10-deployment/) for further guidance on deployment options.
