// eslint-disable-next-line
import CMS from 'netlify-cms-app'

//  Theme styles
import '../css/flexslider.min.css'
import '../css/line-icons.min.css'
import '../css/elegant-icons.min.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import '../css/theme.css'
import '../css/custom.css'
import '../css/netlify.css'

import { SessionPreview } from '../components/session'
import { HeroTextPreview } from '../components/heroSlider'

//  Register the imported widgets
CMS.registerPreviewTemplate('sessions', SessionPreview)
CMS.registerPreviewTemplate('hero-text', HeroTextPreview)
