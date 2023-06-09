<template>
    <div id="lx-body" class="lx-admin-user-login" :style="{width:autoWidth+'px',height:autoHeight+'px'}">
        <div id="lx-loginAction" class="lx-contents animated fadeIn" style="margin: -240px 0px 0px -484px;">
            <div id="lx-content-box">
                <div id="lx-news-box">
                    <div class="lx-news-image"><span class="logo"></span>
                        <a class="lx-news-text-bar" href="javascript:;" target="_blank">Sass钱包仅需5分钟便可部署一个支持去中心化的钱包，无单点故障问题{{ autoHeight }}</a>
                    </div>
                    <ul class="lx-login-guide">
                        <li>
                            <i class="iconfont icon-smile"></i>
                            <a href="javascript:;" target="_blank">自主设置</a>
                        </li>
                        <li>
                            <i class="iconfont icon-lock"></i>
                            <a href="javascript:;" target="_blank">安全、便捷</a>
                        </li>
                        <li>
                            <i class="iconfont icon-tools"></i>
                            <a href="javascript:;" target="_blank">充值、立即到帐</a>
                        </li>
                        <li>
                            <i class="iconfont icon-mail"></i>
                            <a href="mailto:service@urlos.com" target="_blank">提现验证、事务处理</a>
                        </li>
                    </ul>
                </div>
                <div id="lx-login-box">
                    <div id="lx-login-title">登录</div>
                    <div id="lx-login-form-box">
                        <form class="ant-form ant-form-horizontal login-form validFormData"
                              action="http://home.wallet.com/Login/index.html" method="post"
                              onsubmit="return validForm(this);return false;" place="right">
                            <div class="ant-row ant-form-item">
                                <div class="ant-form-item-control-wrapper">
                                    <div class="ant-form-item-control has-success">
                                            <span class="ant-form-item-children">
                                                <span class="ant-input-affix-wrapper">
                                                    <span class="ant-input-prefix">
                                                        <i class="iconfont icon-user"></i>
                                                    </span>
                                                    <input type="text" class="ant-input" name="loginId"
                                                           placeholder="请输入您的用户名" tabindex="1" maxlength="15"
                                                           nullable="false" star="false" alt="请输入管理员账户"/>
                                                </span>
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-row ant-form-item">
                                <div class="ant-form-item-control-wrapper">
                                    <div class="ant-form-item-control has-success">
                                            <span class="ant-form-item-children">
                                                <span class="ant-input-affix-wrapper">
                                                    <span class="ant-input-prefix">
                                                        <i class="iconfont icon-password"></i>
                                                    </span>
                                                    <input type="password" class="ant-input" name="password"
                                                           placeholder="请输入您的密码" tabindex="2" nullable="false"
                                                           star="false" alt="请输入管理员密码"/>
                                                </span>
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-row ant-form-item">
                                <div class="ant-form-item-control-wrapper">
                                    <div class="ant-form-item-control">
                                            <span class="ant-form-item-children">
												<div class="ant-col-16">
													<div class="ant-row ant-form-item">
														<div class="ant-form-item-control-wrapper">
															<div class="ant-form-item-control">
                                                                <span class="ant-form-item-children">
                                                                    <span class="ant-input-affix-wrapper">
                                                                        <span class="ant-input-prefix">
                                                                            <i class="iconfont icon-safe"></i>
                                                                        </span>
                                                                        <input type="captcha" placeholder="请输入验证码"
                                                                               id="captcha" class="ant-input" value="">
                                                                    </span>
                                                                </span>
                                                            </div>
														</div>
													</div>
												</div>
											</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ant-row ant-form-item">
                                <div class="ant-form-item-control-wrapper">
                                    <div class="ant-form-item-control">
                                            <span class="ant-form-item-children">
                                                <button id="lx-login-button" class="ant-btn submitAjax"
                                                        data-background="#26afb5" verify="true" data-dialog="0"
                                                        data-loading="处理中,请稍后" data-alias="登录"
                                                        style="padding:2px 15px;">登录</button>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div id="recommendHttps" style="margin-top: 0px;">
                            <div style="text-align: left;">
                                <span>危险提示：使用HTTP协议提交的数据很容易被截获，从而导致你的服务器被控制，建议你使用下面的网址进行登录！</span>
                                <div><a href=""></a></div>
                                <div>
                                    当使用自签名证书时，浏览器会提示不安全，如果你想消除提示，请参考官方文档替换掉默认的SSL证书！
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="lx-login-footer">
        ©<a target="_blank" href="javascript:;">WALLET TEAM</a>
        &nbsp; - &nbsp;
        <a target="_blank" href="javascript:;">WALLET官方网站</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            autoWidth: '1920px',
            autoHeight: '937px'
        }
    },
    created() {
        this.autoWidth = window.innerWidth
        this.autoHeight = window.innerHeight
    },
    mounted() {
        //初始化获取浏览器宽度和高度
        this.autoWidth = window.innerWidth
        this.autoHeight = window.innerHeight

        //实时改变浏览器宽度和高度
        window.onresize = () => {
            return (() => {
                this.autoWidth = window.innerWidth
                this.autoHeight = window.innerHeight
            })();
        };
    }
}

</script>

<style>
@import "@/assets/css/login.css";
</style>