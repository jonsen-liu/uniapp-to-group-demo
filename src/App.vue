<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.init()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			init () {
				getApp().getCommodityData = function({ params, success, fail }) {
					console.log(123)
					// 说明： params: spuId
					// 新增renderType: native/webview，主要是针对intro字段。
					const result = {
						info: {
							soldNo: 9999999,
							minNo: 2,
							maxNo: 100,
							orderFlag: {
								contacts: true,
								phoneNumber: true,
								notes: true,
							},
						},
						customerServiceInfo: {
							title: '客服',
							subTitle: '客服客服客服客\n\n客服客服',
							img: 'https://img1.baidu.com/it/u=3318672134,564363923&fm=26&fmt=auto&gp=0.jpg'
						},
						customerTips: [
							{
								logo: 'https://img1.baidu.com/it/u=3318672134,564363923&fm=26&fmt=auto&gp=0.jpg',
								content: '少时诵诗书所所所所所所所所所所',
							},
							{
								logo: 'https://img1.baidu.com/it/u=3318672134,564363923&fm=26&fmt=auto&gp=0.jpg',
								content: '呜呜呜呜呜呜呜呜无无无无',
							},
						],
						// 其他推荐
						recommends: {
							style: 'list', // 列表：list 网格：grid,
							custom: false, //是否自定义
							title: '商品推荐', //推荐标题
							data: [
								{ spuId: '6982878708495304718' },
								{ spuId: '6982214926857226248' },
								{ spuId: '6984776756347537415' },
								{ spuId: '6984445217113966600' },
								{ spuId: '6989805953315031077' },
								{ spuId: '6986668208921069576' },
							],
						},
						// 可选套餐
						packages: {
							style: 'slide', // 列表：list 横滑：slide,
							title: '可选套餐', //可选套餐标题
							data: [
								{ spuId: '6982878708495304718', soldNo: 2157 },
								{ spuId: '6982214926857226248', soldNo: 2157 },
								{ spuId: '6984776756347537415', soldNo: 2157 },
								{ spuId: '6984445217113966600', soldNo: 2157 },
								{ spuId: '6989805953315031077', soldNo: 2157 },
								{ spuId: '6986668208921069576', soldNo: 2157 },
							]
						},
						// 底部支付按钮
						// 注意：底部最多放3个按钮，内置了分享按钮，所以开发者还可以传入两个，如果超出2个，则自动取前两个
						payButton: {
							text: '购买',
							status: 1, //number, 1： 立即购买， 2: 已下架（已售罄/已下架）， 3：未开始
							list: [
								{
									type: 'home',
									url: 'usr://pages/index/index', //小程序主页路径
									urlType: 'tab',
								},
								{
									type: 'customerService', // 客服服务
									url: '',
								},
								{
									type: 'mine', //我的页面
									url: '',
									urlType: 'tab',
								},
								{
									type: 'favorite', //收藏
								},
								{
									type: 'shoppingCart', //购物车
									url: '',
								},
							],
						},
					}
					success(result)
				}

				getApp().getShareAppMessageSync = function(from, spuId) {
					return {
						title: '', //分享标题
						desc: '', //分享描述
						imageUrl: '', //分享logo
					}
				}

				getApp().loginUser = function({ params, success, fail }) {
					tt.login({
						force: true,
						success(params) {
							success({
								sessionId: '8fd5d2d76e9c35dc4f44525e9cdc36ab',
							})
						},
					})
				}

				getApp().onCustomerService = function() {}

				getApp().getUserInfo = function({ success }) {
					success({ contacts: '测试', phoneNumber: '13515667890' })
				}

				getApp().getPhoneNumber = function({ success }) {
					success({ phoneNumber: '13515667890' })
				}
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
