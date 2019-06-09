/**
 * @author
 */

export function fetchJSON(url,body) {
    return new Promise((resolve, reject) => {
        this.timer = setTimeout(()=>{
            fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
                .then((response) => {
                    return response.json()
                })
                .catch((error) => {
                    reject(error);
                }).then((responseData) => {
                if (!responseData) {
                    reject(new Error('fetchJSON:responseData is null'));
                    return;
                }
                this.timer && clearTimeout(this.timer)
                resolve(responseData);
            }).done();
        },2000)

    })
}

export function fetchJSONByGET(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'Mozilla/5.0 (Linux; X11)',
            }
        })
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchJSONByGET:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}

export function fetchSpreadData() {
    return[
        {
            id:100001,
            title: 'React-Native从服务器获取数据',
            author: 'edgar a. guest',
            img:'picture/ad01.png',
            intro: '本堂课主要讲的是如何从服务器端得到数据',
            viewersCount:200,
            score:4.8,
            video:'React/8/8.mp4',
            pdf:'JavaScript/1/book.pdf'
        },
        {
            id:100002,
            title: 'WebRtc实时直播技术的入门与研究',
            author: 'edgar a. guest',
            img:'picture/ad02.jpg',
            intro: '本堂课主要讲的如何用WebRtc进行实时直播',
            viewersCount:200,
            score:4.8,
            video:'Java/2/02.mp4'
        },
        {
            id:100003,
            title: 'Vue.js源码解析',
            author: 'edgar a. guest',
            img:'picture/ad03.png',
            intro: '本堂课将带领你深入解析Vue.js源码及原理',
            viewersCount:200,
            score:4.8,
            video:'JS/11/11.mp4'
        },

    ]

}
