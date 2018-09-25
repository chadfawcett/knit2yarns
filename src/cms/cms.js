// eslint-disable-next-line
import CMS from 'netlify-cms'

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

//  Register the imported widget
CMS.registerPreviewTemplate('sessions', SessionPreview)
