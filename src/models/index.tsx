/*
 * @Author: lsh
 * @email: 864115770@qq.com
 * @Date: 2021-02-13 17:47:59
 */
import { init } from "@rematch/core"
import * as models from './models'




const store = init({
    models
})

export default store