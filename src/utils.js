export function ajax(params) {
    params = params || { time: 5000 };
    params.data = params.data || {};
    var json = params.jsonp ? jsonp(params) : json(params);

    function jsonp(params) {
        var callbackName = params.jsonp;
        var head = document.getElementsByTagName('head')[0];
        params.data['callback'] = callbackName;
        var data = formatParams(params.data);
        var script = document.createElement('script');
        head.appendChild(script);
        window[callbackName] = function(json) {
            head.removeChild(script);
            clearTimeout(script.timer);
            window[callbackName] = null;
            params.success && params.success(json);
        };
        script.src = params.url + '&' + data;
        if (params.time) {
            script.timer = setTimeout(function() {
                window[callbackName] = null;
                head.removeChild(script);
                params.error && params.error({
                    message: '超时'
                });
            }, params.time);
        }
    };

    function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        };
        arr.push('v=' + random());
        return arr.join('&');
    }

    function random() {
        return Math.floor(Math.random() * 10000 + 500);
    }
}

export function submitForm(opts, cb) {
    let name = opts.name
    let tel = opts.tel
    let address = opts.add
    let subject = opts.sub
    let nameVal = name.value
    let telVal = tel.value
    let addVal = address.value
    let subVal = subject.value
    const tel_re = /^1((3\d)|(4[5, 7])|(5\d)|7([0, 6, 7, 8])|8(\d))\d{8}$/
    const name_re = /^[\u4e00-\u9fa5]+$/
    if (nameVal === '') {
        alert('请输入您的真实姓名！')
        name.focus()
        return
    } else if (name_re.test(nameVal) === false) {
        alert('请输入汉字！')
        name.value = ''
        name.focus()
        return
    }
    if (telVal === '') {
        alert('请输入手机号')
        tel.focus()
        return;
    } else if (tel_re.test(telVal) == false) {
        alert('请输入有效的手机号码！')
        tel.value = ''
        tel.focus()
        return
    }
    if (addVal === '') {
        alert('请输入您的地址')
        address.focus()
        return
    }
    if (subVal === '' || subVal == 'null') {
        alert('请选择您的考试类型')
        return;
    }
    var data = {
        "info[name]": nameVal,
        "info[tel]": telVal,
        "info[address]": addVal,
        "info[subject]": subVal,
        dosubmit: 1
    }
    ajax({
        url: 'http://www.cyikao.com/index.php?m=formguide&c=index&a=ajax_api&formid=74&action=js&siteid=1',
        data: data,
        jsonp: 'callback',
        success: function(res) {
            if (res.status == 1) {
                if (cb) {
                    cb()
                }
                return
            } else {
                alert('提交失败，请稍后再试！')
                name.value = ''
                tel.value = ''
                address.value = ''
                subject.value = 'null'
                return
            }
        },
        error: function(error) {
            console.log(error);
            alert('提交失败，请稍后再试！')
            name.value = ''
            tel.value = ''
            address.value = ''
            subject.value = 'null'
            return
        }
    })
}
