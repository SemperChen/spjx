/**
 * @author Semper
 */
/*export function fetchNetData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchNetData:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}*/

import {baseUrl} from "../constants/api";

export function fetchNetData() {
    return {
        en: [
        ],
        zh: [
            {
                id:1,
                title: 'PHP7进阶到架构实战',
                author: 'edgar a. guest',
                img:'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDicmEiaDlLpibia1udcZShSLzsOU187sxIU10NKktXxmRXJJoAiaiagSKuh58ImsOPPaw3g/356?tp=webp',
                intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                    'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                    '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                    '电视广告、片头动画都出自AE合成。',
                viewersCount:200,
                score:4.8,
                video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
            },
            {
                id:2,
                title: '互联网高级java架构课程',
                author: '詹姆斯·蒙哥马利',
                img:'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB6gJiclkoorulN7WeQKTkBicW1Dp0h4559QgpRJ2VvQ8w0G8GWibFbnibmplUURWOiclGg/356?tp=webp',
                intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                    'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                    '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                    '电视广告、片头动画都出自AE合成。',
                viewersCount:188,
                score:4.6,
                video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
            },
            {
                id:3,
                title: 'PHP7进阶到架构实战',
                author: '斯瓦密.维渥堪纳达',
                img:'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDIIBJsbticBRR1xWbns2oFibLjdRgHUeicNeDO5hfJx9icXFvLaI9hIGsmhEQU2xyA124/356?tp=webp',
                intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                    'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                    '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                    '电视广告、片头动画都出自AE合成。',
                viewersCount:312,
                score:4.5,
                video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
            },
            {
                id:4,
                title: 'PHP7进阶到架构实战',
                author: 'edgar a. guest',
                img:'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDicmEiaDlLpibia1udcZShSLzsOU187sxIU10NKktXxmRXJJoAiaiagSKuh58ImsOPPaw3g/356?tp=webp',
                intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                    'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                    '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                    '电视广告、片头动画都出自AE合成。',
                viewersCount:112,
                score:4.8,
                video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
            },
            {
                id:5,
                title: '互联网高级java架构课程',
                author: '詹姆斯·蒙哥马利',
                img:'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB6gJiclkoorulN7WeQKTkBicW1Dp0h4559QgpRJ2VvQ8w0G8GWibFbnibmplUURWOiclGg/356?tp=webp',
                intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                    'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                    '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                    '电视广告、片头动画都出自AE合成。',
                viewersCount:182,
                score:4.7,
                video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
            },
            {
                id:6,
                title: 'PHP7进阶到架构实战',
                author: '斯瓦密.维渥堪纳达',
                img:'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDIIBJsbticBRR1xWbns2oFibLjdRgHUeicNeDO5hfJx9icXFvLaI9hIGsmhEQU2xyA124/356?tp=webp',
                intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                    'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                    '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                    '电视广告、片头动画都出自AE合成。',
                viewersCount:388,
                score:4.9,
                video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
            },

        ]
    }
}

export function fetchMyPoems(){
    return(
        globalMyPoems
    )
}

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
            title: 'PHP7进阶到架构实战',
            author: 'edgar a. guest',
            img:'picture/ad01.png',
            intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                '电视广告、片头动画都出自AE合成。',
            viewersCount:200,
            score:4.8,
            video:'React-Native/1/1.mp4',
            pdf:'JavaScript/1/book.pdf'
        },
        {
            id:100002,
            title: 'PHP7进阶到架构实战',
            author: 'edgar a. guest',
            img:'picture/ad02.jpg',
            intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                '电视广告、片头动画都出自AE合成。',
            viewersCount:200,
            score:4.8,
            video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
        },
        {
            id:100003,
            title: 'PHP7进阶到架构实战',
            author: 'edgar a. guest',
            img:'picture/ad03.png',
            intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                '电视广告、片头动画都出自AE合成。',
            viewersCount:200,
            score:4.8,
            video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
        },
        {
            id:100004,
            title: 'PHP7进阶到架构实战',
            author: 'edgar a. guest',
            img:'picture/ad04.png',
            intro: '本套AE入门视频教程特邀请了经验丰富的胡老师为大家授课，希望大家从中体验AE的魅力，掌握这一前沿的技术。 ' +
                'After Effects简称AE,是Adobe公司推出的一款图形视频处理软件，适用于从事设计和视频特技的机构，' +
                '包括电视台、动画制作公司、个人后期制作工作室以及多媒体工作室。目前是十分流行火爆的后期制作软件，许多电影特效，' +
                '电视广告、片头动画都出自AE合成。',
            viewersCount:200,
            score:4.8,
            video:'https://media.w3.org/2010/05/sintel/trailer.mp4'
        }
    ]

}
