# aiceblock Website

Welcome to the official repository for the aiceblock website.

aiceblock is an innovative technological venture dedicated to advancing AI and blockchain technologies. Stay tuned for exciting updates and developments.

## Configuration

The following keys must be set in `_config.yml` before running or deploying the site:

```yaml
contact_form_app_uri:   # Google Apps Script web app URL (see Contacts Form below)
recaptcha_key_id:       # Google reCAPTCHA v3 site key (see reCAPTCHA below)
```

### Contacts Form

Form submissions are handled by a [Google Apps Script](https://developers.google.com/apps-script) web app that writes entries directly to a Google Sheet.

To set it up:
1. Create a Google Sheet and open **Extensions → Apps Script**
2. Paste the `doPost` function from this repository ([here](apps-script/contact_form.js))
3. Deploy it via **Deploy → New deployment → Web app**, setting access to **Anyone**
4. Copy the deployment URL into `contact_form_app_uri` in `_config.yml`
5. After any changes to the script, redeploy by going to **Deploy → Manage deployments**, editing the existing deployment, and selecting **New version**

### reCAPTCHA

The contact form is protected against bots using [Google reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) (invisible, no checkbox required).

To set it up:
1. Register your site at [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
2. Select **reCAPTCHA v3** and add your domain (and `localhost` for local development)
3. Copy the **site key** into `recaptcha_key_id` in `_config.yml`
4. Copy the **secret key** into the `SECRET_KEY` constant in your Apps Script

## Development

This project uses the [Jekyll](https://jekyllrb.com) framework, and therefore, it is required that Jekyll be installed on your local machine to set up the project locally.

The repository is organized into the following directories:

- **`_data`** — Contains YAML files with all the content used across the site. Each component or page can be configured accordingly within these files.
- **`_includes`** — Houses reusable HTML components that are included in the various layouts or pages. This allows for modularity and efficient code reuse.
- **`_layouts`** — Contains the layout templates for the pages, including common elements such as headers, footers, and global styles. Layouts define the general structure and require assets such as fonts, CSS, and scripts (if applicable).
- **`_sass`** — Contains SCSS partials that define the site's styles. These partials are imported into the main stylesheet and compiled by Jekyll into a single CSS file.
- **`assets`** — Stores all media files such as images, icons, and JavaScript. In this project, JavaScript files are not stored here. Instead, each component includes its own small scripts as needed, ensuring that unnecessary scripts are not loaded.
- **`base_dir`** — Contains the Markdown files that define the individual pages of the site. Each page specifies which layout it uses and which components are incorporated within that page.

## Deployment

The website is currently hosted via [GitHub Pages](https://pages.github.com). If you wish to deploy it elsewhere or need to make any modifications to the deployment process, please refer to the [Jekyll documentation](https://jekyllrb.com/docs/step-by-step/10-deployment/) for further guidance on deployment options.