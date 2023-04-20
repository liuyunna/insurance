//把配置项单独处理


let server_url='https://jianhu.fmytech.xyz';//请求地址
uni.setStorageSync("baseUrl", 'https://jianhu.fmytech.xyz');	
//let token = '5adb273d-a444-40c2-b16f-4d9ff3d43b25';  //凭证
let token;
console.log('4',uni.getStorageSync('token'))
process.env.NODE_ENV === 'development' ? 'https://jianhu.fmytech.xyz/' : 'https://jianhu.fmytech.xyz/' ; //环境配置

function service(options = {}) {
	uni.showLoading({
		title: '加载中'
	});
	token=uni.getStorageSync('token')
	console.log('获取token',token)
       options.url = `${server_url}${options.url}`;
          //配置请求头
        options.header = {
        'content-type': 'application/x-www-form-urlencoded',
        'token': `${token}` //Bearer 

    };

    return new Promise((resolved, rejected) => {
                //成功
        options.success = (res) => {
			uni.hideLoading()
            if (Number(res.data.code) == 1) {  //请求成功
                resolved(res.data);
            }else if(Number(res.data.code) == 401){
				uni.showToast({
				    icon: 'none',   
				    duration: 3000,
				    title: `${res.data.msg}`
				});
				setTimeout(function(){
					uni.redirectTo({
						url: "/pages/login/login"
					});
				},2000)
			}else if(Number(res.data.code) == 0){
				console.log('请求错误！',res)
				uni.showToast({
				    icon: 'none',   
				    duration: 3000,
				    title: `${res.data.msg}！`
				});
			} else if(Number(res.data.code) == 500){
				uni.showToast({
				    icon: 'none',   
				    duration: 3000,
				    title: `请求失败，请重试！`
				});
			} else {
				console.log(res)
                uni.showToast({
                    icon: 'none',   
                    duration: 3000,
                    title: `${res.data.msg}！`
                });
                rejected(res.data.msg);//错误
            }
			
        }
	  //错误
        options.fail = (err) => {
            rejected(err); //错误
			uni.hideLoading()
			uni.showToast({
					title: err,//显示的文字
			        duration: 2000,  //显示多少时间，默认1500毫秒
			        icon: "success"  //自定义显示的图标，默认成功success，错误error,加载loading，不显示图标是none
				})
        }
        uni.request(options);
    });

}

export default service;