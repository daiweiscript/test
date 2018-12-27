import {$} from '@/api'
import {indexRes} from './main.model'
const index$ = $('https://access.video.qq.com/tinyapp/channel_data?vappid=65939066&vsecret=07c58e0c93150c4254a2a24131574b94cab6142ba4210efa&vversion_name=5.2.0.1234&vplatform=5&seqNum=858182775d8d770f_1545376139442_86b0&channelId=100113&modNum=10&pageContext=')
.then(res=>new indexRes(res))

export {index$}