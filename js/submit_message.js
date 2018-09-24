var enMsg = {
    name: 'Please enter your name',
    email: 'Please enter a valid email address',
    mobile: 'Please enter your mobile',
    message: 'Please enter your message',
    success: 'Success',
    fail: 'Fail',
    later: 'Please submit later'
}

var cnMsg = {
    name: '请输入你的姓名',
    email: '请输入你的邮箱',
    mobile: '请输入你的手机号',
    message: '内容不能为空',
    success: '提交成功',
    fail: '提交失败',
    later: '请稍后再试'
}

function initMessage(localization, btn, dataEle, callback) {

    if (!callback) {
        callback = function (result, msg) {
            alert(msg)
        }
    }
    var msg = enMsg;
    if (localization && localization.toLowerCase() == 'cn')
        msg = cnMsg;

    $(btn).click(function () {
        var email = $(dataEle.email).val()
        var message = $(dataEle.message).val();
        var name = $(dataEle.name).val();
        var mobile = $(dataEle.mobile).val();

        if (!name) {
            callback(false, msg.name)
            return;
        }

        var reg = /\w+[@]{1}\w+[.]\w+/;
        if (!reg.test(email)) {
            callback(false, msg.email)
            return;
        }


        if (!mobile) {
            callback(false, msg.mobile)
            return;
        }

        if (!message) {
            callback(false, msg.message)
            return;
        }
        
        var data = "email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message) + "&name=" + encodeURIComponent(name) + "&mobile=" + encodeURIComponent(mobile);
        $.post("/message/submitMessage", data, function (result) {
            if (result.Result == 1) {
                $(dataEle.email).val('')
                $(dataEle.message).val('');
                $(dataEle.name).val('');
                $(dataEle.mobile).val('');
                callback(true, msg.success)
            }
            else if(result.Result == -1){
                callback(false, msg.later)
            }
            else {
                callback(false, msg.fail)
            }
        }, "json")
    })
}