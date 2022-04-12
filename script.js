import MsgReader from '@kenjiuno/msgreader'

const $dropit = document.querySelector('.drop-info');
const $dropper = document.querySelector('#everything');
const $content_metadata = document.querySelector('#metadata');
const $content_headers = document.querySelector('#headers');
const $content_subject = document.querySelector('#subject');
const $content_body = document.querySelector('#body');

$dropper.addEventListener('drop', e => {
    e.preventDefault()
    e.stopPropagation()
    $dropit.style.display = "none";

    $content_metadata.innerHTML = "";
    $content_headers.innerHTML = "";
    $content_subject.innerHTML = "";
    $content_body.innerHTML = "";

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = function(e2) {
            const testMsg = new MsgReader(e2.target.result);
            const fileData = testMsg.getFileData();

            console.log(fileData);
            /*{
                "dataType": "msg",
                "attachments": [
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image011.png",
                        "fileName": "image011.png",
                        "dataId": 737,
                        "contentLength": 1692,
                        "fileNameShort": "image011.png",
                        "pidContentId": "image011.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:27 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image043.png",
                        "fileName": "image043.png",
                        "dataId": 385,
                        "contentLength": 5463,
                        "fileNameShort": "image043.png",
                        "pidContentId": "image043.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:55 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image027.png",
                        "fileName": "image027.png",
                        "dataId": 561,
                        "contentLength": 4262,
                        "fileNameShort": "image027.png",
                        "pidContentId": "image027.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:39 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image019.png",
                        "fileName": "image019.png",
                        "dataId": 649,
                        "contentLength": 12947,
                        "fileNameShort": "image019.png",
                        "pidContentId": "image019.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:33 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image035.png",
                        "fileName": "image035.png",
                        "dataId": 473,
                        "contentLength": 4690,
                        "fileNameShort": "image035.png",
                        "pidContentId": "image035.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:46 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image991187.png",
                        "fileName": "image991187.png",
                        "dataId": 297,
                        "contentLength": 4237,
                        "fileNameShort": "image9~1.png",
                        "pidContentId": "image991187.png@C6A12F56.99BA995B",
                        "creationTime": "Mon, 11 Apr 2022 22:56:11 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image015.png",
                        "fileName": "image015.png",
                        "dataId": 693,
                        "contentLength": 3844,
                        "fileNameShort": "image015.png",
                        "pidContentId": "image015.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:30 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image023.png",
                        "fileName": "image023.png",
                        "dataId": 605,
                        "contentLength": 28457,
                        "fileNameShort": "image023.png",
                        "pidContentId": "image023.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:36 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image031.png",
                        "fileName": "image031.png",
                        "dataId": 517,
                        "contentLength": 1942,
                        "fileNameShort": "image031.png",
                        "pidContentId": "image031.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:43 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image039.png",
                        "fileName": "image039.png",
                        "dataId": 429,
                        "contentLength": 2234,
                        "fileNameShort": "image039.png",
                        "pidContentId": "image039.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:50 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image509811.png",
                        "fileName": "image509811.png",
                        "dataId": 341,
                        "contentLength": 28432,
                        "fileNameShort": "image5~1.png",
                        "pidContentId": "image509811.png@3D112449.DCB69FAD",
                        "creationTime": "Mon, 11 Apr 2022 22:56:11 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "innerMsgContentFields": {
                            "dataType": "msg",
                            "attachments": [
                                {
                                    "dataType": "attachment",
                                    "extension": ".pdf",
                                    "name": "entry.pdf",
                                    "fileName": "entry.pdf",
                                    "dataId": 1251,
                                    "contentLength": 3917,
                                    "fileNameShort": "entry.pdf",
                                    "pidContentId": "69396761CB0CC24CB3A5E9DDF575C90D@ausprd01.prod.outlook.com",
                                    "creationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                                    "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT"
                                }
                            ],
                            "recipients": [
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "brendan.woods@x-team.com",
                                    "email": "brendan.woods@x-team.com",
                                    "smtpAddress": "brendan.woods@x-team.com",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "name": "Marcus Monaghan",
                                    "smtpAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                                    "email": "/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=user25584d2d",
                                    "addressType": "EX",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "email": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "smtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "edmund.chan@xwp.co",
                                    "email": "edmund.chan@xwp.co",
                                    "smtpAddress": "edmund.chan@xwp.co",
                                    "recipType": "to"
                                }
                            ],
                            "sentRepresentingSmtpAddress": "wordpress@clifestaging.wpengine.com",
                            "subject": "[debug - orginial recipient: uat_wpclifeadmin@caulfieldgs.vic.edu.au] : Enrolment Entry",
                            "lastModifierSMTPAddress": "jason.du@sentral.com.au",
                            "messageClass": "IPM.Note",
                            "senderName": "WordPress",
                            "body": "Attachment for draft enrolment: 1056\r\n",
                            "lastModifierName": "Jason Du",
                            "senderSmtpAddress": "wordpress@clifestaging.wpengine.com",
                            "creatorSMTPAddress": "jason.du@sentral.com.au",
                            "headers": "Received: from SYBPR01MB5902.ausprd01.prod.outlook.com (2603:10c6:10:9a::12)\r\n by ME2PR01MB4035.ausprd01.prod.outlook.com with HTTPS; Mon, 11 Apr 2022\r\n 22:36:09 +0000\r\nARC-Seal: i=3; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=pass;\r\n b=jPbH94dFw4ueZGoaNnWj5JmkmEXR5i8Sc9rnEJ128US/xIFi1J3P+ItTBLiO9bJEOXRCvtD6nHIP7gQgu5tIa09rVXieM9KA7/1f+ubeoAqz5gRAirLpGINnFAvsDRnOl67fCRH1Jd7rQciRomEfNvuLKy/l6pOXnZzg0rynxX/9dsmcxWAVz521QLmWpk+ptq56KZOPy7bJEMDdFj6Q9iwC6uX1mg5N8dZ9sEOp9hF1u091D4vIBt7f+oNhmw+eEhhK27xhC35hVM9wcwGahzvekD472C+i9YG43Y3h/54issru9FY6BoyIDDVcUMpnbcpDv4kkd9BR2nWCxVC0bQ==\r\nARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;\r\n s=arcselector9901;\r\n h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;\r\n bh=qs40boYZ3fTBluLw13PRjPy+Q+If+6SGF8wiTX66WUY=;\r\n b=c3uFwGPgmgqMD596bTtOBcjbBMiWlMVEOnxWh9wTu8i0yGzpPUO4DjauZEkTYTevQ0xxJ/Ff6haEXlsd156QM6cvo81KlQ3pVVLTKcXc9OOHVNY79BHTGLmYn74wx1tCGf6o7wG2vBLUO+7S4pZDDrWTePAq8KEpPqlEdyyGIM3SDQGuq0FaOjQXD89p1OJLwc3gKsoo9pnZh9QcTKnSiFpkfK9LtP/Gxhjj0aJ+FFoy+mLOlPlr9spkYZ0pl2ptMgIBqvFhwAf6xAenOAbysyppMeUosolyaP/g5soSE5H92lY5CcxWPwXipjmFspkBw8cxsBnITxff2sCT67h+AQ==\r\nARC-Authentication-Results: i=3; mx.microsoft.com 1; spf=softfail (sender ip\r\n is 124.47.150.22) smtp.rcpttodomain=caulfieldgs.vic.edu.au\r\n smtp.mailfrom=mail1.wpengine.com; dmarc=fail (p=none sp=none pct=100)\r\n action=none header.from=clifestaging.wpengine.com; dkim=fail (body hash did\r\n not verify) header.d=mail1.wpengine.com; arc=pass (0 oda=0 ltdi=0 93)\r\nReceived: from ME3PR01CA0049.ausprd01.prod.outlook.com (2603:10c6:220:f7::22)\r\n by SYBPR01MB5902.ausprd01.prod.outlook.com (2603:10c6:10:9a::12) with\r\n Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29; Mon, 11 Apr\r\n 2022 22:36:03 +0000\r\nReceived: from ME3AUS01FT014.eop-AUS01.prod.protection.outlook.com\r\n (2603:10c6:220:f7:cafe::69) by ME3PR01CA0049.outlook.office365.com\r\n (2603:10c6:220:f7::22) with Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29 via Frontend\r\n Transport; Mon, 11 Apr 2022 22:36:03 +0000\r\nAuthentication-Results: spf=softfail (sender IP is 124.47.150.22)\r\n smtp.mailfrom=mail1.wpengine.com; dkim=fail (body hash did not verify)\r\n header.d=mail1.wpengine.com;dmarc=fail action=none\r\n header.from=clifestaging.wpengine.com;compauth=softpass reason=201\r\nReceived-SPF: SoftFail (protection.outlook.com: domain of transitioning\r\n mail1.wpengine.com discourages use of 124.47.150.22 as permitted sender)\r\nReceived: from au-smtp-1.mimecast.com (124.47.150.22) by\r\n ME3AUS01FT014.mail.protection.outlook.com (10.114.155.155) with Microsoft\r\n SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n 15.20.5144.20 via Frontend Transport; Mon, 11 Apr 2022 22:36:03 +0000\r\nARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed;\r\n\td=dkim.mimecast.com; s=201903; t=1649716562;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t dkim-signature; bh=qs40boYZ3fTBluLw13PRjPy+Q+If+6SGF8wiTX66WUY=;\r\n\tb=Q/xhSEk0/Iz6V/I7prg+JBGa9wWFRqoN+rvFlArSM/uUQhPndG7R1ZRV+7UFuPHtFmwLzZ\r\n\t0NQWEsudBBS1uMbeWmbOijhJ7rtJFTnl6y0pkcfOgJXSrU0SQbD5T4eTqq2xtt4f4Ctv6q\r\n\t9sRWkYTekslkIWQbWICDfliGgOTQ3NNBbbIqcSRwmUA0JpUem76iBRGpzjtIzO6rORcRVb\r\n\tqXTvOK7AiPHCKCFYbxxD+SMoWmVM14aH6iAFyKqm0rYPuE9HdNfdWGhSlhfiSGcznp/wvo\r\n\tSzJcFgHSkXt5Lbc/HN9hg4RD89Uio+3nshYsRjJiM2mQDpwbKeWJrFhvddHKrQ==\r\nARC-Seal: i=2; s=201903; d=dkim.mimecast.com; t=1649716562; a=rsa-sha256;\r\n\tcv=pass;\r\n\tb=aXbw0pfL2yt2A6UBkQ3H/x7kZ9qFYwQ8nNJP3/Udfk4O+pMBFWL7rUCK1YkHVhLpyTybgs\r\n\t3nAMWVlqBME7zgQluf8fFsLsblO4t3SvifMew/9M/CZI7u6hIBHPz+HmYgx9nuqS85SW5X\r\n\tHVe4Bmf862rbtm+iQT82Xgcu2E0IYvBojXzdIshp3/NLdJdAGQ/2svmKfBWBpklG/oJx+D\r\n\tcJ65S94k7WiNU6BAhUk2Nifo1n/mHmD2EZU2cV+W3ybE+TuRgqVwQ7YMBSYINpVGHxRlpY\r\n\tZHn6Tv1aOTx5LIBP20n8szplFbMqGT4INesjRaIZDuyGz4KdL+1le3er3wBLFg==\r\nARC-Authentication-Results: i=2;\r\n\trelay.mimecast.com;\r\n\tdkim=pass header.d=mail1.wpengine.com header.s=mx header.b=rIcpDEZQ;\r\n\tarc=pass (\"mailchannels.net:s=arc-2022:i=1\");\r\n\tdmarc=pass (policy=none) header.from=wpengine.com;\r\n\tspf=pass (relay.mimecast.com: domain of \"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\" designates 23.83.212.6 as permitted sender) smtp.mailfrom=\"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\"\r\nReceived: from aye.elm.relay.mailchannels.net\r\n (aye.elm.relay.mailchannels.net [23.83.212.6]) by relay.mimecast.com with\r\n ESMTP with STARTTLS (version=TLSv1.2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n au-mta-96-TlAA1AJ3PIeVE3gTzAgvEA-1; Tue, 12 Apr 2022 08:35:59 +1000\r\nX-MC-Unique: TlAA1AJ3PIeVE3gTzAgvEA-1\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from relay.mailchannels.net (localhost [127.0.0.1])\r\n\tby relay.mailchannels.net (Postfix) with ESMTP id ED02221777;\r\n\tMon, 11 Apr 2022 22:35:56 +0000 (UTC)\r\nReceived: from pod-171985 (unknown [127.0.0.6])\r\n\t(Authenticated sender: wpengine)\r\n\tby relay.mailchannels.net (Postfix) with ESMTPA id A8EC1216D5;\r\n\tMon, 11 Apr 2022 22:35:50 +0000 (UTC)\r\nARC-Seal: i=1; s=arc-2022; d=mailchannels.net; t=1649716551; a=rsa-sha256;\r\n\tcv=none;\r\n\tb=A6mV+xZCz6rxzzi3eZg6ULXHB49rNRXLwgzPcDoVcpuxTmkkTNfFp945roKPhGwAiC3OMT\r\n\tjz5N5cKrbhq0I9sry7CCYbKpywzMtb/ktxUh7QGJujv5b85w3GJ5k1PQc4K4wyJUdHOiPT\r\n\tqxylg1qVPqgkfF7GKPvNaX31edsVVdvZlBsaZElmlyhLmPcP3LNtssAYzZeSi06P7zKCXE\r\n\tEExiVY93cMIrfryuU21R5L/9LcZb1pBmB4mFJuzR2l3fXCyykbd5DoedNrKDqlhOenvaz4\r\n\t/B1fFD5CJuwnyyd3eJt8T7oRfj+s2grQkzdMYvlZya2H64FeDVGgpjUk6gzZ9A==\r\nARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed;\r\n d=mailchannels.net;\r\n\ts=arc-2022; t=1649716551;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t dkim-signature; bh=DT9pTFZtJ0pD5aMXftX++c5tLXwTb6DKud9/TibTz7g=;\r\n\tb=zzH1JZItiDxRkCLQI8xLIBN8EvSJcAV4aqjH65NFwqMCFUA7ZCc5qToJmx5+5HQYO1XKM2\r\n\tGkyT1m1WRmJvweFyyA8IoKjepHGR7m5duslCrf0nkfxowPrktfgKHdxpRX4Qek3+XOm2ID\r\n\txBxkSQB++Aqs2ohLrBYsTNcJLC9iMbRJJXzEG6X3p+xhH0JKs919rxYORDT+NrKoR75ZLy\r\n\tv6NlmgloO8H1XLiSBLC2GPDVTcKiEqUR9dNPTCX0A8ikeBBChqtxcUHFHlANNAMULySATl\r\n\tGbhHMKt6du6RK1GgNyoXsmzfqVYWSi0puN/+NGg/UbkQW93JrTMSRX6L9zXbUA==\r\nARC-Authentication-Results: i=1;\r\n\trspamd-59b985b6b8-w8zfl;\r\n\tauth=pass smtp.auth=wpengine\r\n smtp.mailfrom=\"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\"\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from pod-171985 ([TEMPUNAVAIL]. [34.87.251.30])\r\n\t(using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384)\r\n\tby 100.96.96.16 (trex/6.7.1);\r\n\tMon, 11 Apr 2022 22:35:56 +0000\r\nX-MC-Relay: Neutral\r\nX-MailChannels-SenderId: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nX-MailChannels-Auth-Id: wpengine\r\nX-Stop-Chief: 52b2ff36052c6af0_1649716556755_2599890301\r\nX-MC-Loop-Signature: 1649716556755:3796117842\r\nX-MC-Ingress-Time: 1649716556755\r\nReceived: from pod-171985 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with ESMTP id 09D54C1421;\r\n\tMon, 11 Apr 2022 22:35:49 +0000 (UTC)\r\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=mail1.wpengine.com;\r\n\ts=mx; t=1649716549; bh=DT9pTFZtJ0pD5aMXftX++c5tLXwTb6DKud9/TibTz7g=;\r\n\th=To:Subject:Date:From:From;\r\n\tb=rIcpDEZQZRzWjuIqbNosiNFHPb+46UB1BpKnzSz82q1h3Qpk6DX0elFfIiwTC+kX8\r\n\t Z9/MulCl51B0zsqoZsZz+4nI+fZjSTxhW2e+3MW5J6TfckPx4J5k7sOyNs3xORYAY8\r\n\t VBE7jvDhN+CdSRq2zFDVcYP7maneZUoDtnlyS7TvVifRa1Fl563/kAvg5HGRw9rmWT\r\n\t q/KsJRFclBLaJaI4qatQK3Pd3O9LT33M6KX6nYyzq2SGu5AITMGea3k0hXVl078QV/\r\n\t QKrhTqLQxifFkiRybbZ9Qp40ZMehnMNiECIc98MOEeGntzdZ2hlgsjO7jwNp5D1nd6\r\n\t IF93OyemfskCw==\r\nReceived: from pod-171985:apache2_74:242 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with SMTP id 0713FC90DD;\r\n\tMon, 11 Apr 2022 22:35:48 +0000 (UTC)\r\nReceived: by pod-171985:apache2_74:242 (sSMTP sendmail emulation); Mon, 11 Apr 2022 22:35:48 +0000\r\nX-AuthUser: 1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nTo: brendan.woods@x-team.com, uat_wpclifeadmin@caulfieldgs.vic.edu.au, MarcusMonaghan@caulfieldgs.vic.edu.au, edmund.chan@xwp.co\r\nSubject: =?us-ascii?Q?[debug_-_orginial_recipient:_uat=5Fwpclifeadmin?=  =?us-ascii?Q?@caulfieldgs.vic.edu.au]_:_Enrolment_Entry?=\r\nX-PHP-Originating-Script: 33:PHPMailer.php\r\nDate: Mon, 11 Apr 2022 22:35:48 +0000\r\nFrom: WordPress <wordpress@clifestaging.wpengine.com>\r\nMessage-ID: <nGugf3gYgHV4OmU4NM8kJqPDlIbiPgSu9E3FX1cvM@clifestaging.wpengine.com>\r\nX-Mailer: PHPMailer 6.5.3 (https://github.com/PHPMailer/PHPMailer)\r\nAuthentication-Results-Original: relay.mimecast.com;\tdkim=pass\r\n header.d=mail1.wpengine.com header.s=mx header.b=rIcpDEZQ;\tarc=pass\r\n (\"mailchannels.net:s=arc-2022:i=1\");\tdmarc=pass (policy=none)\r\n header.from=wpengine.com;\tspf=pass (relay.mimecast.com: domain of\r\n \"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\" designates\r\n 23.83.212.6 as permitted sender)\r\n smtp.mailfrom=\"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\"\r\nX-Mimecast-Spam-Score: 1\r\nX-Mimecast-Impersonation-Protect: Policy=Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nX-Mimecast-Impersonation-Protect: Policy=VIP Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nReturn-Path: wordpress=clifestaging.wpengine.com@mail1.wpengine.com\r\nX-MS-Exchange-Organization-ExpirationStartTime: 11 Apr 2022 22:36:03.1169\r\n (UTC)\r\nX-MS-Exchange-Organization-ExpirationStartTimeReason: OriginalSubmit\r\nX-MS-Exchange-Organization-ExpirationInterval: 1:00:00:00.0000000\r\nX-MS-Exchange-Organization-ExpirationIntervalReason: OriginalSubmit\r\nX-MS-Exchange-Organization-Network-Message-Id: a267df58-0834-49ee-a3d4-08da1c0ba8f4\r\nX-EOPAttributedMessage: 0\r\nX-EOPTenantAttributedMessage: 23a3863a-4bd3-44ea-9329-af3ee8bc6153:0\r\nX-MS-Exchange-Organization-MessageDirectionality: Incoming\r\nX-MS-PublicTrafficType: Email\r\nX-MS-Exchange-Organization-AuthSource: ME3AUS01FT014.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-Organization-AuthAs: Anonymous\r\nX-MS-Office365-Filtering-Correlation-Id: a267df58-0834-49ee-a3d4-08da1c0ba8f4\r\nX-MS-TrafficTypeDiagnostic: SYBPR01MB5902:EE_\r\nX-MS-Exchange-Organization-SCL: -1\r\nX-Microsoft-Antispam: BCL:0\r\nX-Forefront-Antispam-Report: CIP:124.47.150.22;CTRY:AU;LANG:en;SCL:-1;SRV:;IPV:CAL;SFV:NSPM;H:au-smtp-1.mimecast.com;PTR:au-smtp-1.mimecast.com;CAT:NONE;SFS:;DIR:INB\r\nX-MS-Exchange-CrossTenant-OriginalArrivalTime: 11 Apr 2022 22:36:03.0857\r\n (UTC)\r\nX-MS-Exchange-CrossTenant-Network-Message-Id: a267df58-0834-49ee-a3d4-08da1c0ba8f4\r\nX-MS-Exchange-CrossTenant-Id: 23a3863a-4bd3-44ea-9329-af3ee8bc6153\r\nX-MS-Exchange-CrossTenant-AuthSource: ME3AUS01FT014.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-CrossTenant-AuthAs: Anonymous\r\nX-MS-Exchange-CrossTenant-FromEntityHeader: Internet\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: SYBPR01MB5902\r\nX-MS-Exchange-Transport-EndToEndLatency: 00:00:06.6902653\r\nX-MS-Exchange-Processed-By-BccFoldering: 15.20.5144.030\r\nX-Microsoft-Antispam-Mailbox-Delivery: ucf:0;jmr:0;auth:0;dest:I;ENG:(910001)(944506458)(944626604)(920097)(930097)\r\nX-Microsoft-Antispam-Message-Info: =?utf-8?B?UnZxK2RKczBtNlJUQjcvZ0x0YmxBa1djS1N3UzZRV2dwdkhUQzVEM1BydlAw?=\r\n =?utf-8?B?UGgwanlpVEVWZy9YclEyeXhkK2FEci9JZ1BvMEp3YkxLa1pCSzhtRUZPYTV4?=\r\n =?utf-8?B?QStnV1ZKNVpkWlFEYzNnRUR2ZVoxMGlDSDJKVzRFS29WWEpDS1VFY0g4SVFQ?=\r\n =?utf-8?B?ZDdkaXVpZzczZm5lSjNjbHhDMFA0QTRERFJFeFdwL0ExYjl3c1BaLzNGWHR5?=\r\n =?utf-8?B?UWpWcFFrODZDa1Y1aDEzZEVXa2RzWFdEcHE1cGJOUDJFdk9OUXRSNHJUNTlk?=\r\n =?utf-8?B?QW5IMHcwRU5zSVlEYjV2NFpDN3pGMUZHbGVlRDNESm9hbk9QK2FBSFlYSmJS?=\r\n =?utf-8?B?VjdWbkl3T3NWbnp6Y2tuZDltSnE2Sy9yd0IwM2ZPNHl3bGJLL1FBeTY1ZjZ1?=\r\n =?utf-8?B?QmRpaDZDTEdsVmQ5ZHJDY2RUU2lRRUI4TlhrTFQwQW1EN3J0cW5icUtWNVRp?=\r\n =?utf-8?B?c1RYbVVWakw1anpETFJibGJMSSswVSt0amVNQ0x0RmVQdnJ6dVk2aDVzYzJn?=\r\n =?utf-8?B?NWlqeU95Qmg4djBIa2s0OFdGTk5WK1QvdlhMaDZhallENW9kMTR1RldyM2ty?=\r\n =?utf-8?B?TlF4TmVmcEgyU1V3T1lYZ3RNbEFFWnp3SHVXbnRnMDNySTNwSnRRYXdJdEk1?=\r\n =?utf-8?B?TjdRWURPVCt5Z2t2Wk93VXpVTGZ3bDd5ZXZNYXZzcE02ZFliQUlqMElwLzFV?=\r\n =?utf-8?B?SERWSUNlbTZpZHF6QkxPdTBQQS9hZW1qTUFBWFhTYm8zVDRraUwxWitsMU5E?=\r\n =?utf-8?B?VDFGTktIU3BBM1hOYVVwT25oR1JGcXFDNkJkVmdDTi9OamZ5bDZNS2JMUFFT?=\r\n =?utf-8?B?dXYxeWpMWHlXQk9hVHFLdnJMeDZGM0d2UlZ0ZVZoMU5JWkpWSUxiNS8xN3ky?=\r\n =?utf-8?B?R1JWK3Q4S20rUjM5dzNaVloyQyt2Ym8xVGJXS0VwcUg4TFF4cUJ6VldjMU9t?=\r\n =?utf-8?B?SFNMT3JJNTdqREFKdS96OEdXQjZQK010Wms4YmQvaHdWbUNPODcyM0s5OXp5?=\r\n =?utf-8?B?TnVzN0VvMWJEV0doNU1tN0tGNm1wQzFxVGw0THYyRlNVWU5iNk5hbm5CVDZY?=\r\n =?utf-8?B?TFViWlU2bGMrYjZqeXpRY1kweHdzeUFxQW9mYkdKajhoSS9lQlNDR250VnFB?=\r\n =?utf-8?B?eGYzYXRDV2FUSWlEUWhlUGtibE12QXRZQlhxWkZLdHRnMVl2cHBaTWUzTTlh?=\r\n =?utf-8?B?U0E2K1ZpVFZsSGpRcGFUZEl2YWNtVlIrUTBjMWJONTF4RERnRzk5NXg0cC81?=\r\n =?utf-8?B?Y21wWDBteVlyRlVOV2JrUjNHOTNTSVZOM0EwcFZkZG4zQUQ5QTM3ZllSeEJF?=\r\n =?utf-8?B?NmFOM3FhVE5kSEFXMUdZRCtoWk9qanYxNnBvMEozZXp2Q2FaMW1BRC8zSlJO?=\r\n =?utf-8?B?N2h5eGhCcjVURDRLOGlORkM4U2U1VnpsaWVtcHZvWHRWazdIcHZyNVZNd1Rz?=\r\n =?utf-8?B?cVAzbDB2aTF1aXk0SHdtQ2xrTG15TUNpaWdSeUROamRxUjI3eS8rOGFmNHRZ?=\r\n =?utf-8?B?OUtMbzdnNVVxTWVZalBEVUdFRmNZcmwrNjVaczNwTkJtemJGVjQzRktZb3JM?=\r\n =?utf-8?B?YUs1RVRmenlMUXM1QW1ZV3UrdG9PSGdRaDlFUEFVcGY2K1FhRng2aVUxa3Z4?=\r\n =?utf-8?B?OGZOVUhHQlNqd3ZsZjQycDVWcExSVjcyYXZRa2gyOHRQem1xZ0ZMSzlOR2RO?=\r\n =?utf-8?B?dlh2Y2Zic2F3NVdCeEFEMUcwWDUwZ1I3YVZ2Z1JMTVpnYTV3cDNPNjJKdTNi?=\r\n =?utf-8?B?dnJtZDRBbVN6bTRGdVRRTTNlRjBsR1VVN0lrR1ZHTUVudnR5UzdGVXVxWGlP?=\r\n =?utf-8?B?TExTdXhtTHlJais2OU9ITDdXeU9aaWhkbm80eEFESkVsODJ4S2pVUVc4U0Fq?=\r\n =?utf-8?B?dlp6YUxsNmh3Qm1halJKK0dFcWVtZkZhTUtWUEtHblVpZDZNaVRnanJvRDBU?=\r\n =?utf-8?B?dzVweVJTUjhyejFZWGdNajhFbGRjTUVzTGNwNkhFMXdMYTZRS3B6b0RFOGxN?=\r\n =?utf-8?B?dldTR0g3MGE5em9GYkFhT1RqMlNUOHVMWGhNVEc5S3FTaVE5eG04eVB6R0JN?=\r\n =?utf-8?B?OXUwZU1EM080SVY2eFJzUTMwRThpUFdkNHp0bnVyN3BwNGJnNm5nZlhZamZJ?=\r\n =?utf-8?B?dVMyVUZZdDg2NXlMdkIyQ0U3eXJhdUU4SXVrdmJ3MFE4aFJBYklWU09KN1d2?=\r\n =?utf-8?B?TUo4dmYxNkQ4WEZYZUNkWHAza25tVWM2WUlqemE5NEt1M3RuOWlwS0dqWmdw?=\r\n =?utf-8?B?NEVPcVU3R2t3V3M3K2xwcWtMSXdsZVo1NGF2L1JQS2RteVUyT29Wd240aEVW?=\r\n =?utf-8?B?WUdaeVpRYXcxSUpBOGxXeGxrSURmSkZucndIV292VE1hakNudlFQOFdCNDVq?=\r\n =?utf-8?B?a0lTZW9GN1RaL1RPRkIwZWRrU0dabmlTR1VEOVpQd0tBS3JBWGpKWHp0V3Nw?=\r\n =?utf-8?B?b0tVWG82LzZtb2dEVmpMdHhBL0hIU2xzSzBXNUdXZ0VDRW9yMTJ3ZWpNZWhQ?=\r\n =?utf-8?B?NmJGYitBZXo5WkFNNHp6UXhKZjc2Uk5MZWlMSnRvU1ZBPT0=?=\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed;\r\n boundary=\"b1_nGugf3gYgHV4OmU4NM8kJqPDlIbiPgSu9E3FX1cvM\"\r\n",
                            "senderAddressType": "SMTP",

                            "senderEmail": "wordpress@clifestaging.wpengine.com"
                        },
                        "innerMsgContent": true,
                        "folderId": 253,
                        "extension": ".eml",
                        "name": "[debug - orginial recipient- uat_wpclifeadmin@caulfieldgs.vic.edu.au] - Enrolment Entry.eml",
                        "fileName": "[debug - orginial recipient- uat_wpclifeadmin@caulfieldgs.vic.edu.au] - Enrolment Entry.eml",
                        "fileNameShort": "_debug~1.eml",
                        "pidContentId": "2FC09B4BC02B1A41977306AF4CBFD67E@ausprd01.prod.outlook.com",
                        "creationTime": "Mon, 11 Apr 2022 22:55:21 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT"
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image003.png",
                        "fileName": "image003.png",
                        "dataId": 825,
                        "contentLength": 2220,
                        "fileNameShort": "image003.png",
                        "pidContentId": "image003.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:23 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image013.png",
                        "fileName": "image013.png",
                        "dataId": 715,
                        "contentLength": 1933,
                        "fileNameShort": "image013.png",
                        "pidContentId": "image013.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:29 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image017.png",
                        "fileName": "image017.png",
                        "dataId": 671,
                        "contentLength": 4681,
                        "fileNameShort": "image017.png",
                        "pidContentId": "image017.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:31 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image021.png",
                        "fileName": "image021.png",
                        "dataId": 627,
                        "contentLength": 2223,
                        "fileNameShort": "image021.png",
                        "pidContentId": "image021.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:34 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image025.png",
                        "fileName": "image025.png",
                        "dataId": 583,
                        "contentLength": 5452,
                        "fileNameShort": "image025.png",
                        "pidContentId": "image025.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:37 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image029.png",
                        "fileName": "image029.png",
                        "dataId": 539,
                        "contentLength": 1701,
                        "fileNameShort": "image029.png",
                        "pidContentId": "image029.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:41 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image033.png",
                        "fileName": "image033.png",
                        "dataId": 495,
                        "contentLength": 3853,
                        "fileNameShort": "image033.png",
                        "pidContentId": "image033.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:44 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image037.png",
                        "fileName": "image037.png",
                        "dataId": 451,
                        "contentLength": 12958,
                        "fileNameShort": "image037.png",
                        "pidContentId": "image037.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:48 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image041.png",
                        "fileName": "image041.png",
                        "dataId": 407,
                        "contentLength": 28468,
                        "fileNameShort": "image041.png",
                        "pidContentId": "image041.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:53 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image045.png",
                        "fileName": "image045.png",
                        "dataId": 363,
                        "contentLength": 4273,
                        "fileNameShort": "image045.png",
                        "pidContentId": "image045.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:57 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image256507.png",
                        "fileName": "image256507.png",
                        "dataId": 319,
                        "contentLength": 5427,
                        "fileNameShort": "image2~1.png",
                        "pidContentId": "image256507.png@B1983B22.54E00CEF",
                        "creationTime": "Mon, 11 Apr 2022 22:56:11 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "innerMsgContentFields": {
                            "dataType": "msg",
                            "attachments": [],
                            "recipients": [
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "brendan.woods@x-team.com",
                                    "email": "brendan.woods@x-team.com",
                                    "smtpAddress": "brendan.woods@x-team.com",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "name": "Marcus Monaghan",
                                    "smtpAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                                    "email": "/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=user25584d2d",
                                    "addressType": "EX",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "email": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "smtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "edmund.chan@xwp.co",
                                    "email": "edmund.chan@xwp.co",
                                    "smtpAddress": "edmund.chan@xwp.co",
                                    "recipType": "to"
                                }
                            ],
                            "lastModifierSMTPAddress": "jason.du@sentral.com.au",
                            "senderName": "WordPress",
                            "subject": "[debug - orginial recipient: uat_wpclifeadmin@caulfieldgs.vic.edu.au] : Unable to create student enrolment draft",
                            "headers": "Received: from ME3PR01MB7175.ausprd01.prod.outlook.com (2603:10c6:220:16e::10)\r\n by ME2PR01MB4035.ausprd01.prod.outlook.com with HTTPS; Mon, 11 Apr 2022\r\n 22:32:27 +0000\r\nARC-Seal: i=3; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=pass;\r\n b=JgURD0OHPJ4/vpZqqL3xPWfaQiSpiXOQn6F+Aei2XeJyOtCTQcR8iddRBMD4mExyxvM/SUNQYPnbWADObx+dKL2RVRR4+OgHcrt3ZJqKd/C9wDkeaBeDxBAPD8kIo10PXG+HgLfhZsjqXhkBkmX5hUXJtnk6IECdsx6RdHlXPxGn6b7bgkNKrrf0wvRsp+Uvm3k9WLzgfYxj/KKSnAMEQ/w0ue7cTNJ4b3D7imeF24lcMLnacsM27pOPK53icXswOJjaiQ5+N4aj4zjyanxPu+qnQjUWR4kv6boAEg7Y9CZYbo8V50x2Lr92QhY9KOrZC7SbZryD7wmTkAiOpA+PEg==\r\nARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;\r\n s=arcselector9901;\r\n h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;\r\n bh=pp9nIre7wgguAn3sKfBwC/Q9A4IiYAmbKOoBJT/b6kA=;\r\n b=V2T/KtHcfT2B7QTOEojA9VxL39YIdHTCwk/XkYNb4V3/7hI05VYxHv+ngRwe814gDq7Wfn3LazC7aKN7bFmCftgencoe+l7SrYlKc/OC7vH+3l1/8h29/HE1l4l3ap6gNt5jrOgdsTdIEkspC6kWHeLw9myU0wah0iERIiS1/Is5rDpIpUtxj6VcMWj++syNuvHDpNvPoAWy9VvvzVeZjl7bP5HfyvuxfXYyXAuLGypv55UMz9gJeamB7ktwJTjhA1jX0F9NlIErR0rmzcBSuf8D6bMUO3U+YvOThrdDuMYX13PtMreRNR14dlI7z1wCPFFueOl7kioPzjDkPTytrQ==\r\nARC-Authentication-Results: i=3; mx.microsoft.com 1; spf=softfail (sender ip\r\n is 103.13.69.22) smtp.rcpttodomain=caulfieldgs.vic.edu.au\r\n smtp.mailfrom=mail1.wpengine.com; dmarc=fail (p=none sp=none pct=100)\r\n action=none header.from=clifestaging.wpengine.com; dkim=fail (body hash did\r\n not verify) header.d=mail1.wpengine.com; arc=pass (0 oda=0 ltdi=0 93)\r\nReceived: from SY2PR01CA0033.ausprd01.prod.outlook.com (2603:10c6:1:15::21) by\r\n ME3PR01MB7175.ausprd01.prod.outlook.com (2603:10c6:220:16e::10) with\r\n Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29; Mon, 11 Apr\r\n 2022 22:32:22 +0000\r\nReceived: from SY4AUS01FT013.eop-AUS01.prod.protection.outlook.com\r\n (2603:10c6:1:15:cafe::cb) by SY2PR01CA0033.outlook.office365.com\r\n (2603:10c6:1:15::21) with Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.30 via Frontend\r\n Transport; Mon, 11 Apr 2022 22:32:22 +0000\r\nAuthentication-Results: spf=softfail (sender IP is 103.13.69.22)\r\n smtp.mailfrom=mail1.wpengine.com; dkim=fail (body hash did not verify)\r\n header.d=mail1.wpengine.com;dmarc=fail action=none\r\n header.from=clifestaging.wpengine.com;compauth=softpass reason=201\r\nReceived-SPF: SoftFail (protection.outlook.com: domain of transitioning\r\n mail1.wpengine.com discourages use of 103.13.69.22 as permitted sender)\r\nReceived: from au-smtp-1.mimecast.com (103.13.69.22) by\r\n SY4AUS01FT013.mail.protection.outlook.com (10.114.156.177) with Microsoft\r\n SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n 15.20.5144.20 via Frontend Transport; Mon, 11 Apr 2022 22:32:21 +0000\r\nARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed;\r\n\td=dkim.mimecast.com; s=201903; t=1649716341;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t content-transfer-encoding:content-transfer-encoding:dkim-signature;\r\n\tbh=pp9nIre7wgguAn3sKfBwC/Q9A4IiYAmbKOoBJT/b6kA=;\r\n\tb=Q9LN5L1yaQRepKFRtCkqMX8P+1ncYYu36/J0waXytBmW6zuMp8dp19ylbdXMc1I4t3wY2X\r\n\t4Ew+LQTHHkCQzhLDLBShPSKAXTzpyaIflQuoXMqQep7mixDay6tii/guZJormYoxvmzVYy\r\n\t2cn71CXypEItZSRI7rNxqQL8XgUSgN8KYJgk/0Y4dQqHWWsy+Zf0aYPTIGqVWXzT5rcyHw\r\n\tkhPwkLLQaTllP3iyDGPWQOmPBK3q1+sL5necx6qImtLF1vVDTqwn19PCeRGk1+tzIRX8SO\r\n\tdF+uROLmm5BiOfXJtHZZeglzABI9f0Xl20EWdXmIwWcfzk+V6R9OMnKvq9SbGw==\r\nARC-Seal: i=2; s=201903; d=dkim.mimecast.com; t=1649716341; a=rsa-sha256;\r\n\tcv=pass;\r\n\tb=ayajMLla3lUsksty7oxIDu5IF7qN1gE6+SMCFfyMtf+ImrPvsiW0krKX4KFg5J5mTsfr6i\r\n\tgrgQuYmufoeY2ChuS04/JZ5UKRl0ZLE3flEarJtYGMKPtbAdY3NB+RzGBwZur71nfz000q\r\n\tHt1u0oxXl38+GWQnVyrnmzb3nUnM/BNvhmSsdUnLLNa8toioimifD92DH59u1f/MB4CBoG\r\n\tW6Jv3VcUqH3tsqCzBpUqkw07ryTYF2QPWqUR6VwIjm/ZPFgxmBfVC5eP0M8uG/ZDvGRrTv\r\n\tm1xZwDi1Q46O5QAGkq2JTz7beyXGiBDrkO0rI5DOci7S6NR7joWYlGgd2eMFvw==\r\nARC-Authentication-Results: i=2;\r\n\trelay.mimecast.com;\r\n\tdkim=pass header.d=mail1.wpengine.com header.s=mx header.b=\"Hm/YzqJ+\";\r\n\tarc=pass (\"mailchannels.net:s=arc-2022:i=1\");\r\n\tdmarc=pass (policy=none) header.from=wpengine.com;\r\n\tspf=pass (relay.mimecast.com: domain of \"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\" designates 23.83.212.19 as permitted sender) smtp.mailfrom=\"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\"\r\nReceived: from black.elm.relay.mailchannels.net\r\n (black.elm.relay.mailchannels.net [23.83.212.19]) by relay.mimecast.com\r\n with ESMTP with STARTTLS (version=TLSv1.2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n au-mta-23-fY1kuPm3PpqPUuytXLm4TA-1; Tue, 12 Apr 2022 08:32:19 +1000\r\nX-MC-Unique: fY1kuPm3PpqPUuytXLm4TA-1\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from relay.mailchannels.net (localhost [127.0.0.1])\r\n\tby relay.mailchannels.net (Postfix) with ESMTP id E4ED6760DFC;\r\n\tMon, 11 Apr 2022 22:32:16 +0000 (UTC)\r\nReceived: from pod-171985 (unknown [127.0.0.6])\r\n\t(Authenticated sender: wpengine)\r\n\tby relay.mailchannels.net (Postfix) with ESMTPA id B2A2B760AA6;\r\n\tMon, 11 Apr 2022 22:32:15 +0000 (UTC)\r\nARC-Seal: i=1; s=arc-2022; d=mailchannels.net; t=1649716336; a=rsa-sha256;\r\n\tcv=none;\r\n\tb=eUrhIbbdRg+ivUNKft6B+DKNOPdPKCWa+h9ks4cjJBJSwVxI6ts7INy1bIpShz79rCN26M\r\n\tL8fZRveXOzMAlj26IWMTqU8PLcKrd+H22FnrnulO111O/RQox9nHVfQJ7XIDvg+yAPQxmK\r\n\t6nNS2bwiI40QBKqRYILN/MQIGFObgsnzIrL+ixuE4g2QpESgtvOkE/Xr5bOhuUQ+7gbBCo\r\n\tI/Pqa2Oe5BZnYFLjHVg/jV2nGJAFgQSiYIDSNacWUgYzD0u7pu/TVQvDmxsasyyIDvzUBs\r\n\tqhvPrTkVlhUQsBihLCyqPForcBKjqxsUEMZ/E/Pxd8RWx/Zg9tVP677T8YkRXg==\r\nARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed;\r\n d=mailchannels.net;\r\n\ts=arc-2022; t=1649716336;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t dkim-signature; bh=dSAG7Sld3piGFTLLexK4pf/lUG4hv+0HnjsrLOSnn6M=;\r\n\tb=BPyJtjjp4X5NUqO6gCTQxrtC641/tpvpm3wzWaLa7WKImwiIJYwbnHMYxw1bGj19L8nikt\r\n\tD0laXXvyGmZ+5QXXjY8YES3KuMIltCnvf3524XKmlUQtN1ho6G/dukmsQTuMEda7VlzaLd\r\n\tDoZB9BkuxyH2hV99bsUH3pb4XlXgCGDUTbyL0Dk5weXko+IjeTBSmsnazhY0BjRNkbxGcT\r\n\t357Yd2FFQkdMQWqSawGz/d/Danxer4tDt+KLxmFqIVF5ukdvzntasPshBbq5zbERH0u25q\r\n\tOaJLlfXsmqsPEvRyIKuA4sbw71XUaY2fNgKfrVjefrA4uES2E0+4t3qguIHKTg==\r\nARC-Authentication-Results: i=1;\r\n\trspamd-cf675fb6d-sxr5m;\r\n\tauth=pass smtp.auth=wpengine\r\n smtp.mailfrom=\"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\"\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from pod-171985 (30.251.87.34.bc.googleusercontent.com\r\n [34.87.251.30])\r\n\t(using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384)\r\n\tby 100.127.95.106 (trex/6.7.1);\r\n\tMon, 11 Apr 2022 22:32:16 +0000\r\nX-MC-Relay: Neutral\r\nX-MailChannels-SenderId: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nX-MailChannels-Auth-Id: wpengine\r\nX-Tangy-Obese: 4f9debe46afc19d9_1649716336719_1006301103\r\nX-MC-Loop-Signature: 1649716336719:2374043781\r\nX-MC-Ingress-Time: 1649716336718\r\nReceived: from pod-171985 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with ESMTP id B18DEC90DE;\r\n\tMon, 11 Apr 2022 22:32:13 +0000 (UTC)\r\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=mail1.wpengine.com;\r\n\ts=mx; t=1649716333; bh=dSAG7Sld3piGFTLLexK4pf/lUG4hv+0HnjsrLOSnn6M=;\r\n\th=To:Subject:Date:From:From;\r\n\tb=Hm/YzqJ+/BIJnVHxf5o+w0nZoqxyYUDge9R+VaD4UItiB0j1PsE6DG7TKDmFjflkN\r\n\t HsPq6u7VyikZq/8yDUtqemhwKxSpEx8PdDpGWpuk5n/zzHxfvtD//XPGNqrKusa+Zs\r\n\t YoRtHMRtI7YPTgXRlAW3HbCBfGrM3UIx2gTObObQbKKSDGqiIbxUS5N3v3+BZnM2v5\r\n\t F9eBpNIyxc6Q6dxooR/OYOH17k2mF9JAEHmJxP8qwn7UVCQ/E187oDAODirea0qw0G\r\n\t GbzauVWgyNnh4G6Yb5Jl3dfiOcMa9+NJOj6XLTVRxExNQvPuwZmNFETpXDszdg78ZM\r\n\t 3pzdR/Q/fZI2g==\r\nReceived: from pod-171985:apache2_74:242 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with SMTP id AEC0EBDEE5;\r\n\tMon, 11 Apr 2022 22:32:12 +0000 (UTC)\r\nReceived: by pod-171985:apache2_74:242 (sSMTP sendmail emulation); Mon, 11 Apr 2022 22:32:12 +0000\r\nX-AuthUser: 1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nTo: brendan.woods@x-team.com, uat_wpclifeadmin@caulfieldgs.vic.edu.au, MarcusMonaghan@caulfieldgs.vic.edu.au, edmund.chan@xwp.co\r\nSubject: =?us-ascii?Q?[debug_-_orginial_recipient:_uat=5Fwpclifeadmin?=  =?us-ascii?Q?@caulfieldgs.vic.edu.au]_:_Unable_to_create_stu?=  =?us-ascii?Q?dent_enrolment_draft?=\r\nX-PHP-Originating-Script: 33:PHPMailer.php\r\nDate: Mon, 11 Apr 2022 22:32:12 +0000\r\nFrom: WordPress <wordpress@clifestaging.wpengine.com>\r\nMessage-ID: <Jbe5f8gkmQQezB8VqKrGAK1QD8S1NcIhfXIQIRiMc@clifestaging.wpengine.com>\r\nX-Mailer: PHPMailer 6.5.3 (https://github.com/PHPMailer/PHPMailer)\r\nAuthentication-Results-Original: relay.mimecast.com;\tdkim=pass\r\n header.d=mail1.wpengine.com header.s=mx header.b=\"Hm/YzqJ+\";\tarc=pass\r\n (\"mailchannels.net:s=arc-2022:i=1\");\tdmarc=pass (policy=none)\r\n header.from=wpengine.com;\tspf=pass (relay.mimecast.com: domain of\r\n \"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\" designates\r\n 23.83.212.19 as permitted sender)\r\n smtp.mailfrom=\"wordpress=clifestaging.wpengine.com@mail1.wpengine.com\"\r\nX-Mimecast-Spam-Score: 1\r\nX-Mimecast-Impersonation-Protect: Policy=Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nX-Mimecast-Impersonation-Protect: Policy=VIP Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nReturn-Path: wordpress=clifestaging.wpengine.com@mail1.wpengine.com\r\nX-MS-Exchange-Organization-ExpirationStartTime: 11 Apr 2022 22:32:21.8284\r\n (UTC)\r\nX-MS-Exchange-Organization-ExpirationStartTimeReason: OriginalSubmit\r\nX-MS-Exchange-Organization-ExpirationInterval: 1:00:00:00.0000000\r\nX-MS-Exchange-Organization-ExpirationIntervalReason: OriginalSubmit\r\nX-MS-Exchange-Organization-Network-Message-Id: 0321c3e0-6208-4e3c-b33a-08da1c0b250e\r\nX-EOPAttributedMessage: 0\r\nX-EOPTenantAttributedMessage: 23a3863a-4bd3-44ea-9329-af3ee8bc6153:0\r\nX-MS-Exchange-Organization-MessageDirectionality: Incoming\r\nX-MS-PublicTrafficType: Email\r\nX-MS-Exchange-Organization-AuthSource: SY4AUS01FT013.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-Organization-AuthAs: Anonymous\r\nX-MS-Office365-Filtering-Correlation-Id: 0321c3e0-6208-4e3c-b33a-08da1c0b250e\r\nX-MS-TrafficTypeDiagnostic: ME3PR01MB7175:EE_\r\nX-MS-Exchange-Organization-SCL: -1\r\nX-Microsoft-Antispam: BCL:0\r\nX-Forefront-Antispam-Report: CIP:103.13.69.22;CTRY:AU;LANG:en;SCL:-1;SRV:;IPV:CAL;SFV:NSPM;H:au-smtp-1.mimecast.com;PTR:au-pop.mimecast.com;CAT:NONE;SFS:;DIR:INB\r\nX-MS-Exchange-CrossTenant-OriginalArrivalTime: 11 Apr 2022 22:32:21.8128\r\n (UTC)\r\nX-MS-Exchange-CrossTenant-Network-Message-Id: 0321c3e0-6208-4e3c-b33a-08da1c0b250e\r\nX-MS-Exchange-CrossTenant-Id: 23a3863a-4bd3-44ea-9329-af3ee8bc6153\r\nX-MS-Exchange-CrossTenant-AuthSource: SY4AUS01FT013.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-CrossTenant-AuthAs: Anonymous\r\nX-MS-Exchange-CrossTenant-FromEntityHeader: Internet\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: ME3PR01MB7175\r\nX-MS-Exchange-Transport-EndToEndLatency: 00:00:06.1650877\r\nX-MS-Exchange-Processed-By-BccFoldering: 15.20.5144.030\r\nX-Microsoft-Antispam-Mailbox-Delivery: ucf:0;jmr:0;auth:0;dest:I;ENG:(910001)(944506458)(944626604)(920097)(930097)\r\nX-Microsoft-Antispam-Message-Info: =?utf-8?B?bVk5eTVUN0pNV2J0bXNyd3lYNUU0NnIyeDQycFB1WC92Z1ZQeUpZMThhVCsz?=\r\n =?utf-8?B?dktqR1YzaWZERXp5SGVJUVluaHR0U0xBdWkxUlczMThJK2ltcTVsdy82YWhn?=\r\n =?utf-8?B?a2FwNDdzenhoVW5SU1NMUnU3cnZxVVJ2ZUIzQjBacU9KM2NqT3VjZ0EwbzBX?=\r\n =?utf-8?B?NG4vLzY4ZUlPTS9tODc3YzhRdWx5WWZFMWsxVFFvcXYvY3RJUVdoR0FZa1FS?=\r\n =?utf-8?B?SVhCNTZ4R2RlOUsxRWI1L1BYdzVmWk12SjNGQ3FhVkdmUnhtdmltVURGa1hk?=\r\n =?utf-8?B?SXBldXhjQ1BJRWU3V3gxamFWNkl6UDNQc0ZucFAvQzBBV21zMGFUYnZHUGlD?=\r\n =?utf-8?B?bnNxQldFNGZOUmdUNkw1ZkZ0S1RzenYvbFpzQVFPd1NyZEU5M1JmdlNldmph?=\r\n =?utf-8?B?dzNVZzBaWFFPNHdpb1Z5dVp4dURrSTZMYXZLemI2dmZFMUtRb3hxeVZVRmNM?=\r\n =?utf-8?B?SVF0UHkxM3BaTm5TYXdYQzRZYXVkVENhQjVCRko1bXlpL1I0c1ZBZmNiQWxL?=\r\n =?utf-8?B?VkZNS21POElTQ0ZaZjE4czZoZlFNSmVDUmRMZ2p4dmhiaG90WDF0VEpZZm5z?=\r\n =?utf-8?B?SmxnZHJYVzM5SW1CdHZGVStLU1BMUk11NG5MYzdBMkMvME53SmpJaUsrdTdq?=\r\n =?utf-8?B?QnQ2c2crVUJvU2g2citOVEpjQWljTGhiRGRnbk5xTlVJSTRLajVQTm9rSWdt?=\r\n =?utf-8?B?REREY1dRRVpZVjF4R1NMNjRzR1B6ZXpHcW5SdUk3RlBDc0xUT1l4VlJxUjVB?=\r\n =?utf-8?B?ZHF4M3JTU1ZwR3BqWjJRUW5RTTF0dVdhb0wydUU4SDVyVXpvd3RpZFpZa01N?=\r\n =?utf-8?B?T1VqKzBqVjd1aUZ6QThQcThIaTJsTnQzcjFZR2pKRmFiZC9PSnE5TzZBazFv?=\r\n =?utf-8?B?bkpQcHBxaVd3VVAzMFdHcFJIUmdJSjhHeW9jamhmZkZJU095ajNKWWNLVTh4?=\r\n =?utf-8?B?dDhZQlYzK0R4Z1BCWjVDVnB5VXZSZ25XQ2xMVEhGMlZmR1p4YXRaOVB2cHpj?=\r\n =?utf-8?B?Sm5VTDM0UVppK1BqNlV1amJQcWkxeVJJQUp4Q2lNeE1zWDFxZzloV0RYNDVT?=\r\n =?utf-8?B?eXZTSnFCY0ZsWnpLQUxpdDQwK2JFcjZMWEhGTTQvSU4xMWR0Z0JEM242SEV5?=\r\n =?utf-8?B?aktIeUZYRFBHaXlmUmlOeHZsUkQrN1AyOVJ2NFBlcER3ZStvalp3OVRBM3JW?=\r\n =?utf-8?B?Y215UGRSRG1oSnFOaEI0QkZiOEZCNXdkc2VrYTBvT29GaXBrdGhrQnhhdDRj?=\r\n =?utf-8?B?VDh4SThqV1FlZElYQnl2L0RBNTFCMzQ0UnVKNUtkNHBXTW50eHdoTUxVcll2?=\r\n =?utf-8?B?V1B3VUY3WkRQbzRHWGVOOW9hY2FYd1NzMXpDN1QxM2hxOEk0SmxNcnlmK3U3?=\r\n =?utf-8?B?ZzdNRCtwODhTcGRGY3MwTjEwRUo2YWF2VG4zVVRXY1BuV0x1UFdRWXlNTGxh?=\r\n =?utf-8?B?dTJGci9aSEo2ZzNlaTcrWjhjMGtpWUw1OHV6TWZSMVVlNGhBdlpmNWVvcmds?=\r\n =?utf-8?B?aUpnc1pKSkw0TSsyUlkrdGoxTEJTSkQ2M3MzNjNjNmVhSXo5MDRkSzNDQU83?=\r\n =?utf-8?B?dGJ6eTgzbHFXL0dJZ2JBNFBwcCtLd01taWZzaWxqM082ZEF0SmcrVkNIUkV3?=\r\n =?utf-8?B?cDY5YVFGLytodVBRU1dSbzhwNTVDRDJQcWJWcGhrM3NEM0lLNG8ya0VUbFZY?=\r\n =?utf-8?B?Vld1R1I4ZGVVNDhrd1U2Q0wrUU1ncUxCVy9Hc3ViTzhIL0g5enFpc2REQnYy?=\r\n =?utf-8?B?MmJQTlRyUzBzdk1FN0c2REZKWmg4Yk5PdmhKdjYzaWc4RmdYMFgyQldPUytB?=\r\n =?utf-8?B?UEJSYzFlZkx4eFpLOG50MHR0aUJXMkpva09vUEREYWZSMyt1Kyt1bGM2bXNN?=\r\n =?utf-8?B?RVZUVFU5OUQ3Qmx6Snk3YmprNlEzWUtrYy9BclZnNG1kbjM2aGl1ZjlBKzg1?=\r\n =?utf-8?B?Q3B4YW9LdUxkaHRwaG9INStXYzhLSVNlejJ4dUY4QmFlYlc3clVTb0pjS3dj?=\r\n =?utf-8?B?elZIYUp4bWJyMFNMYjdxZHhQZW5rZEh2a3k4eGU4YWhpaUxPU2dHYS92Wk1i?=\r\n =?utf-8?B?NFQ2cHBXS1EvM3VMTko0TnlDYm1yTFl0VzduRWJHdVBaQ241VDlVMjBZMXN6?=\r\n =?utf-8?B?VzlOMHN6YmREUFAyYnhSN3hPZys3dDF2SVdDdUNsMU1URlJ2Wk01czRqOFE4?=\r\n =?utf-8?B?Wk5BakV4TnBVVm9IQTNTMmpwMDY2WGJpeDRSNDhNdmo2UUhEeE5xWmxkbEdT?=\r\n =?utf-8?B?aHJwUGxqTmswNGVOZjN5aTE4bndvMFB5UkNRNjJOZFkvSUZiUXdMaXEvN3RZ?=\r\n =?utf-8?B?eHZHVnhYOGo3K1B0RmF5a1JuSnFWeXBUY1ZQK1hpZERmTXNYeGxvMktSYUNn?=\r\n =?utf-8?B?ZmlNa21NVUxuQ2lCZlFEZmI3TDhLNlRaem9hdFUrYUdtZWt5K3lzSWd2alFp?=\r\n =?utf-8?B?WHNuejFuZUd2UFZLVmVseWlGZTVjdVM3S3F2V1cyTjdSN0JUVjJNaDZTa0c0?=\r\n =?utf-8?B?WHFhRmJZaUZkZTJ6ck10by9tTi9ydCtkdnpVeXl4bG5JSktsOGREZ2RwMW1Q?=\r\n =?utf-8?B?bm9iUmVRc3ZFRHNEcys1YWVScTloQkRteEVyR0dwMjVJZi85OXd5a2cxUkZk?=\r\n =?utf-8?B?SEswMlk2QT09?=\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: quoted-printable\r\n",
                            "sentRepresentingSmtpAddress": "wordpress@clifestaging.wpengine.com",
                            "messageClass": "IPM.Note",
                            "senderAddressType": "SMTP",
                            "body": "Unable to create student enrolment draft with Entry ID: 660. Please manually add this enrolment to Sentral.\r\n",
                            "lastModifierName": "Jason Du",
                            "senderSmtpAddress": "wordpress@clifestaging.wpengine.com",
                            "creatorSMTPAddress": "jason.du@sentral.com.au",
                            "senderEmail": "wordpress@clifestaging.wpengine.com",

                        },
                        "innerMsgContent": true,
                        "folderId": 275,
                        "extension": ".eml",
                        "name": "[debug - orginial recipient- uat_wpclifeadmin@caulfieldgs.vic.edu.au] - Unable to create student enrolment draft.eml",
                        "fileName": "[debug - orginial recipient- uat_wpclifeadmin@caulfieldgs.vic.edu.au] - Unable to create student enrolment draft.eml",
                        "fileNameShort": "_debug~1.eml",
                        "pidContentId": "1984FE9BEE25BF4280F1D8C48F7FFFE8@ausprd01.prod.outlook.com",
                        "creationTime": "Mon, 11 Apr 2022 22:45:30 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT"
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image007.png",
                        "fileName": "image007.png",
                        "dataId": 781,
                        "contentLength": 5449,
                        "fileNameShort": "image007.png",
                        "pidContentId": "image007.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:25 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image012.png",
                        "fileName": "image012.png",
                        "dataId": 726,
                        "contentLength": 2221,
                        "fileNameShort": "image012.png",
                        "pidContentId": "image012.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:28 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image014.png",
                        "fileName": "image014.png",
                        "dataId": 704,
                        "contentLength": 28455,
                        "fileNameShort": "image014.png",
                        "pidContentId": "image014.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:29 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image016.png",
                        "fileName": "image016.png",
                        "dataId": 682,
                        "contentLength": 5450,
                        "fileNameShort": "image016.png",
                        "pidContentId": "image016.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:31 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image018.png",
                        "fileName": "image018.png",
                        "dataId": 660,
                        "contentLength": 4260,
                        "fileNameShort": "image018.png",
                        "pidContentId": "image018.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:32 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image020.png",
                        "fileName": "image020.png",
                        "dataId": 638,
                        "contentLength": 1694,
                        "fileNameShort": "image020.png",
                        "pidContentId": "image020.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:33 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image022.png",
                        "fileName": "image022.png",
                        "dataId": 616,
                        "contentLength": 1935,
                        "fileNameShort": "image022.png",
                        "pidContentId": "image022.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:35 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image024.png",
                        "fileName": "image024.png",
                        "dataId": 594,
                        "contentLength": 3846,
                        "fileNameShort": "image024.png",
                        "pidContentId": "image024.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:37 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image026.png",
                        "fileName": "image026.png",
                        "dataId": 572,
                        "contentLength": 4683,
                        "fileNameShort": "image026.png",
                        "pidContentId": "image026.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:38 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image028.png",
                        "fileName": "image028.png",
                        "dataId": 550,
                        "contentLength": 12954,
                        "fileNameShort": "image028.png",
                        "pidContentId": "image028.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:40 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image030.png",
                        "fileName": "image030.png",
                        "dataId": 528,
                        "contentLength": 2230,
                        "fileNameShort": "image030.png",
                        "pidContentId": "image030.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:42 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image032.png",
                        "fileName": "image032.png",
                        "dataId": 506,
                        "contentLength": 28464,
                        "fileNameShort": "image032.png",
                        "pidContentId": "image032.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:43 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image034.png",
                        "fileName": "image034.png",
                        "dataId": 484,
                        "contentLength": 5459,
                        "fileNameShort": "image034.png",
                        "pidContentId": "image034.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:45 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image036.png",
                        "fileName": "image036.png",
                        "dataId": 462,
                        "contentLength": 4269,
                        "fileNameShort": "image036.png",
                        "pidContentId": "image036.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:47 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image038.png",
                        "fileName": "image038.png",
                        "dataId": 440,
                        "contentLength": 1705,
                        "fileNameShort": "image038.png",
                        "pidContentId": "image038.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:49 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image040.png",
                        "fileName": "image040.png",
                        "dataId": 418,
                        "contentLength": 1946,
                        "fileNameShort": "image040.png",
                        "pidContentId": "image040.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:51 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image042.png",
                        "fileName": "image042.png",
                        "dataId": 396,
                        "contentLength": 3857,
                        "fileNameShort": "image042.png",
                        "pidContentId": "image042.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:54 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image044.png",
                        "fileName": "image044.png",
                        "dataId": 374,
                        "contentLength": 4694,
                        "fileNameShort": "image044.png",
                        "pidContentId": "image044.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:56 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image046.png",
                        "fileName": "image046.png",
                        "dataId": 352,
                        "contentLength": 70983,
                        "fileNameShort": "image046.png",
                        "pidContentId": "image046.png@01D84E4A.B57A7EC0",
                        "creationTime": "Mon, 11 Apr 2022 22:55:58 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image832220.png",
                        "fileName": "image832220.png",
                        "dataId": 330,
                        "contentLength": 3821,
                        "fileNameShort": "image8~1.png",
                        "pidContentId": "image832220.png@F4BA5AC5.4CEE78B4",
                        "creationTime": "Mon, 11 Apr 2022 22:56:11 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image741243.png",
                        "fileName": "image741243.png",
                        "dataId": 308,
                        "contentLength": 4658,
                        "fileNameShort": "image7~1.png",
                        "pidContentId": "image741243.png@0A07A6A6.D69F289E",
                        "creationTime": "Mon, 11 Apr 2022 22:56:11 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "innerMsgContentFields": {
                            "dataType": "msg",
                            "attachments": [],
                            "recipients": [
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "brendan.woods@x-team.com",
                                    "email": "brendan.woods@x-team.com",
                                    "smtpAddress": "brendan.woods@x-team.com",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "name": "Marcus Monaghan",
                                    "smtpAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                                    "email": "/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=user25584d2d",
                                    "addressType": "EX",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "email": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "smtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "edmund.chan@xwp.co",
                                    "email": "edmund.chan@xwp.co",
                                    "smtpAddress": "edmund.chan@xwp.co",
                                    "recipType": "to"
                                }
                            ],
                            "senderName": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "senderSmtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "subject": "[debug - orginial recipient: monaghanmj44@gmail.com] : Caulfield Grammar School - Enrolment Application Received",
                            "headers": "Received: from MEYPR01MB8015.ausprd01.prod.outlook.com (2603:10c6:220:175::14)\r\n by ME2PR01MB4035.ausprd01.prod.outlook.com with HTTPS; Mon, 11 Apr 2022\r\n 22:32:22 +0000\r\nARC-Seal: i=3; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=pass;\r\n b=oN8wdAvbGPCvs3cFQORK7inc9333s+vyvE+CEk0s7lPLi8yYw3wrDK4D25OyI6V/ADS6/oUtj6XJzeFTXdN/cz2KkTCgtvFq02kpxTI4z9L9x4pQNrHLv/Gk6ysGbkuDt/Zm8svK8Qm1MxMfDbHZDqjnodPlr9eHBjl50qI3XOzRC0gofcSenlQxI9Hdx52vGu3xYKwxsnLklfyLZyt5oHz5G8uTCnyKtm1mb+l7OrsQAl/YgoimehnxmwL+eRTsQ/3svH80TCEpw/3vezXdYrmfNKrPoGCOI9cJfZ6fqDUxj7awoF2w/wY1sCR/BbNerrkGzXLJ/bC12MuACth/fA==\r\nARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;\r\n s=arcselector9901;\r\n h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;\r\n bh=CHeUJfBFlIuOv3/mEKo8T1oxKr0/InrXw+/6PXOxQE8=;\r\n b=ccOOXkUB6L7IrdRoWVolTqKRP9meivJ988H4z1SYvimouqb3CGKsRFx3oj6yZudUPBX+YYIBf2ZKZwcVJLFP5kOFcPQW6khbEM3uRItvCc10iVPEM354F8CDNMmEGaHjs9r8g3PAaRNCBdHTRg6KKgXNZuA523myRBFD8xlJDRsTh/2XkGC1oKB1dae+SdcyfTJB+xPKzmPL2STgyz5NCx2YNXWfx+ow4hOaisCXpJf2fwc3QxZvTOQTTWc+N6yREZsBCTzk6KVvFS6gwqGw1mqxeETt/nn4Vbr4W8AT34IejQO0Jc/kMaahFg/AFNiSpBcoBxXzFlUhdd8E+mKQIg==\r\nARC-Authentication-Results: i=3; mx.microsoft.com 1; spf=softfail (sender ip\r\n is 124.47.150.22) smtp.rcpttodomain=caulfieldgs.vic.edu.au\r\n smtp.mailfrom=mail1.wpengine.com; dmarc=fail (p=none sp=none pct=100)\r\n action=none header.from=caulfieldgs.vic.edu.au; dkim=fail (body hash did not\r\n verify) header.d=mail1.wpengine.com; arc=pass (0 oda=0 ltdi=0 93)\r\nReceived: from SYCPR01CA0024.ausprd01.prod.outlook.com (2603:10c6:10:31::36)\r\n by MEYPR01MB8015.ausprd01.prod.outlook.com (2603:10c6:220:175::14) with\r\n Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29; Mon, 11 Apr\r\n 2022 22:32:16 +0000\r\nReceived: from ME3AUS01FT008.eop-AUS01.prod.protection.outlook.com\r\n (2603:10c6:10:31:cafe::8f) by SYCPR01CA0024.outlook.office365.com\r\n (2603:10c6:10:31::36) with Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.30 via Frontend\r\n Transport; Mon, 11 Apr 2022 22:32:16 +0000\r\nAuthentication-Results: spf=softfail (sender IP is 124.47.150.22)\r\n smtp.mailfrom=mail1.wpengine.com; dkim=fail (body hash did not verify)\r\n header.d=mail1.wpengine.com;dmarc=fail action=none\r\n header.from=caulfieldgs.vic.edu.au;compauth=none reason=905\r\nReceived-SPF: SoftFail (protection.outlook.com: domain of transitioning\r\n mail1.wpengine.com discourages use of 124.47.150.22 as permitted sender)\r\nReceived: from au-smtp-1.mimecast.com (124.47.150.22) by\r\n ME3AUS01FT008.mail.protection.outlook.com (10.114.155.173) with Microsoft\r\n SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n 15.20.5144.20 via Frontend Transport; Mon, 11 Apr 2022 22:32:15 +0000\r\nARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed;\r\n\td=dkim.mimecast.com; s=201903; t=1649716335;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t content-transfer-encoding:content-transfer-encoding:dkim-signature;\r\n\tbh=CHeUJfBFlIuOv3/mEKo8T1oxKr0/InrXw+/6PXOxQE8=;\r\n\tb=XLD3AAyQG35t8U4TAvt2caI6bBXWOeLGUer1uS9BM4A8dcu/lGECdIQmNjmjTkgHwtQVhE\r\n\tEWBennGoJ7FRd44OPuPbpvUbm7Yx3xLoU4kOeSvX93/mVk99YUSGpXdSQP4w6wTtcZbsv5\r\n\t7ByFrGf71a5R6LRg6ynIWWKE/a8Q+uoguN0dXqVxgy76IroCF9/+etMdxOdHlN7tQE81B/\r\n\tvjuYwlwWgI9s8PUQman202ayi9OeTyIeh+AsTP5NFUmDZsYswr1BSLhgMn17xIqxRl89CK\r\n\tq4kBd80p5iUyTXgyoUqoK7noqz5p1SGRiDnHQVVsQ5T2RlfVtzTxy0IhwN+KoQ==\r\nARC-Seal: i=2; s=201903; d=dkim.mimecast.com; t=1649716335; a=rsa-sha256;\r\n\tcv=pass;\r\n\tb=TBvFCjWbl7cYpK/HqG9FQi6hDRraHtrcfguLPpRfiPMXa95fGIdEdYK+h3ENZvmo8k4X0p\r\n\tlkmz/gxm9JVdS+QtgMkTZKN5oOQiglufSOCG4/yC0wNCHZOLP2YOZePaUmAH5wm9aNktbW\r\n\tCqpmlvA4NhLkGtLhpYONyG5fzwoAvIhPh6oBu8smq9YxJ8Ig1lrprl9ySjMzXUZUUAP30g\r\n\t/ldIAlS8FWR+61ta6Ze0XG5MB+be7GyyFbuX9zAn7zrOYqOC2wOAIHDlFHzCyRCER3/D18\r\n\tdyNBUuIXERs/ZiS6a3lj3PbV56Y+lEJoHA+EaAcF+97QBPGHxgwbV7bNvBN4fQ==\r\nARC-Authentication-Results: i=2;\r\n\trelay.mimecast.com;\r\n\tdkim=pass header.d=mail1.wpengine.com header.s=mx header.b=WEEMPrsF;\r\n\tarc=pass (\"mailchannels.net:s=arc-2022:i=1\");\r\n\tdmarc=fail reason=\"SPF not aligned (relaxed), DKIM not aligned (relaxed)\" header.from=caulfieldgs.vic.edu.au (policy=none);\r\n\tspf=pass (relay.mimecast.com: domain of \"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\" designates 23.83.212.46 as permitted sender) smtp.mailfrom=\"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\"\r\nReceived: from cross.elm.relay.mailchannels.net\r\n (cross.elm.relay.mailchannels.net [23.83.212.46]) by relay.mimecast.com\r\n with ESMTP with STARTTLS (version=TLSv1.2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n au-mta-86-ekG7ajxxMWSPFIvTdGe24Q-1; Tue, 12 Apr 2022 08:32:13 +1000\r\nX-MC-Unique: ekG7ajxxMWSPFIvTdGe24Q-1\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from relay.mailchannels.net (localhost [127.0.0.1])\r\n\tby relay.mailchannels.net (Postfix) with ESMTP id CF0E56C046B;\r\n\tMon, 11 Apr 2022 22:32:10 +0000 (UTC)\r\nReceived: from pod-171985 (unknown [127.0.0.6])\r\n\t(Authenticated sender: wpengine)\r\n\tby relay.mailchannels.net (Postfix) with ESMTPA id 486856C039A;\r\n\tMon, 11 Apr 2022 22:32:09 +0000 (UTC)\r\nARC-Seal: i=1; s=arc-2022; d=mailchannels.net; t=1649716330; a=rsa-sha256;\r\n\tcv=none;\r\n\tb=U2+CzTNJQN3xKfTHGFomYk9bUpFTMDfl6z66Z5BBPajlYpfBjYziXA3TcX9juTcNO+t8db\r\n\tfzcbiDN9+AK9iHVc0PInco8v9BcFZSLWgp62qXZIEluNOBZDde1QLD+rapQGtayO2gIHX/\r\n\txmoiObx3oLevTIPiTIoyn59MrRNu4zouNzYqcjbl+Zfd1tdcn+M6yZ9+a3ebmf3Tmx6pvH\r\n\tdiLFcxOA3yKyQZKqe91XcGetTuRNigBPqv1UPa1VX2sWHj+ZlyuEqPx7R+HouE3cMGTsVM\r\n\tZLOEBto7GyjclEpZgVMZ8o1Qfr20eQ4B1sILPwYYpUVOqQVpdAl6zy1BOP9QrQ==\r\nARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed;\r\n d=mailchannels.net;\r\n\ts=arc-2022; t=1649716330;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t dkim-signature; bh=Z5LHuSR7SsHjmusEIczhkO/hZoFxKwNkSQWqjBqgOe8=;\r\n\tb=YuDqBwpFfYLDn0NRtby5iqhKufqpya1HxI/I6gZNiXj+rZwFA8tSJMr9zShls0rTLrrU29\r\n\t31F2c4gBkS7DsMPt4y//rzRm/33uM3jC7obuEXlvV52IqSrA+c7i+cPfrLLnFFwCbV1UNW\r\n\tPoAZLFLUHsmSMAMdiqtyCUcma/vlOxTMS1SEf9UE1xOvKL/BD4dQjs0FZeuhNJXZPN/WKf\r\n\teBT/T4zc/t/ZIRa+DW2hhRFXYHO6LpTSsFqZhoPHG2or2aLCdX9V+e9/Z74cIue/XeiTlc\r\n\t6XBxHx2p4F4hhnMJ3P+0MQi/bYOFmGnUtmWbtltDsXZEq9YPKxCogfssnclmGw==\r\nARC-Authentication-Results: i=1;\r\n\trspamd-cf675fb6d-nhdfw;\r\n\tauth=pass smtp.auth=wpengine\r\n smtp.mailfrom=\"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\"\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from pod-171985 (30.251.87.34.bc.googleusercontent.com\r\n [34.87.251.30])\r\n\t(using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384)\r\n\tby 100.106.158.161 (trex/6.7.1);\r\n\tMon, 11 Apr 2022 22:32:10 +0000\r\nX-MC-Relay: Neutral\r\nX-MailChannels-SenderId: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nX-MailChannels-Auth-Id: wpengine\r\nX-Reign-Society: 70bcb923521902aa_1649716330319_674121384\r\nX-MC-Loop-Signature: 1649716330319:3560563049\r\nX-MC-Ingress-Time: 1649716330318\r\nReceived: from pod-171985 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with ESMTP id 76567BDEE5;\r\n\tMon, 11 Apr 2022 22:32:07 +0000 (UTC)\r\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=mail1.wpengine.com;\r\n\ts=mx; t=1649716327; bh=+pEWGXTvpls/7QbdjVtF41SG98jnocOzxK/IHALqaNo=;\r\n\th=To:Subject:Date:From:From;\r\n\tb=WEEMPrsF8I/d11APJNtZlUz2IxdCy4I9zqzBUEBVbRznVbqzsT/Fr6EXIbCKCTIHL\r\n\t lvcJ13OqiEgOKmANlnI5dMxYoBBIO5+pOjSp3XngxJXqPbQty7w1GhW9OJRflLRsTA\r\n\t s+ig0UR99bCtH3Jsqhud9RPUYsgu9kdGK7E1uAquKrVKrFktrBj/eNVjS1WPPHCyKL\r\n\t SNat8W5+NodyzSHIy75IVqVZNGrhGTouE562baS+AUg/Y9UeZWE5Q2CU/IwyFI+bR9\r\n\t 3HHcW5K0WEzPDcs9L/DpxAHFNrXlOWSpbBMKvmSb6rSnrP/PvscGHXY346TfO3O713\r\n\t Io5AKq0l5z+0Q==\r\nReceived: from pod-171985:apache2_74:242 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with SMTP id 73B3BC90DF;\r\n\tMon, 11 Apr 2022 22:32:06 +0000 (UTC)\r\nReceived: by pod-171985:apache2_74:242 (sSMTP sendmail emulation); Mon, 11 Apr 2022 22:32:06 +0000\r\nX-AuthUser: 1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nTo: brendan.woods@x-team.com, uat_wpclifeadmin@caulfieldgs.vic.edu.au, MarcusMonaghan@caulfieldgs.vic.edu.au, edmund.chan@xwp.co\r\nSubject: =?us-ascii?Q?[debug_-_orginial_recipient:_monaghanmj44@gmail?=  =?us-ascii?Q?.com]_:_Caulfield_Grammar_School_-_Enrolment_Ap?=  =?us-ascii?Q?plication_Received?=\r\nX-PHP-Originating-Script: 33:PHPMailer.php\r\nDate: Mon, 11 Apr 2022 22:32:06 +0000\r\nFrom: \"uat_wpclifeadmin@caulfieldgs.vic.edu.au\" <uat_wpclifeadmin@caulfieldgs.vic.edu.au>\r\nMessage-ID: <vuTmozh2NlJ4CCLNG9bKx36ww6N78qxuf3L5PfZ0@clifestaging.wpengine.com>\r\nX-Mailer: PHPMailer 6.5.3 (https://github.com/PHPMailer/PHPMailer)\r\nAuthentication-Results-Original: relay.mimecast.com;\tdkim=pass\r\n header.d=mail1.wpengine.com header.s=mx header.b=WEEMPrsF;\tarc=pass\r\n (\"mailchannels.net:s=arc-2022:i=1\");\tdmarc=fail reason=\"SPF not aligned\r\n (relaxed), DKIM not aligned (relaxed)\" header.from=caulfieldgs.vic.edu.au\r\n (policy=none);\tspf=pass (relay.mimecast.com: domain of\r\n \"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\" designates\r\n 23.83.212.46 as permitted sender)\r\n smtp.mailfrom=\"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\"\r\nX-Mimecast-Spam-Score: 3\r\nX-Mimecast-Impersonation-Protect: Policy=VIP Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nX-Mimecast-Impersonation-Protect: Policy=Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nReturn-Path: uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\r\nX-MS-Exchange-Organization-ExpirationStartTime: 11 Apr 2022 22:32:15.8178\r\n (UTC)\r\nX-MS-Exchange-Organization-ExpirationStartTimeReason: OriginalSubmit\r\nX-MS-Exchange-Organization-ExpirationInterval: 1:00:00:00.0000000\r\nX-MS-Exchange-Organization-ExpirationIntervalReason: OriginalSubmit\r\nX-MS-Exchange-Organization-Network-Message-Id: c2ef91ac-5ba9-4df4-8b57-08da1c0b2179\r\nX-EOPAttributedMessage: 0\r\nX-EOPTenantAttributedMessage: 23a3863a-4bd3-44ea-9329-af3ee8bc6153:0\r\nX-MS-Exchange-Organization-MessageDirectionality: Incoming\r\nX-MS-PublicTrafficType: Email\r\nX-MS-Exchange-Organization-AuthSource: ME3AUS01FT008.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-Organization-AuthAs: Anonymous\r\nX-MS-Office365-Filtering-Correlation-Id: c2ef91ac-5ba9-4df4-8b57-08da1c0b2179\r\nX-MS-TrafficTypeDiagnostic: MEYPR01MB8015:EE_\r\nX-MS-Exchange-Organization-SCL: -1\r\nX-Microsoft-Antispam: BCL:0\r\nX-Forefront-Antispam-Report: CIP:124.47.150.22;CTRY:AU;LANG:en;SCL:-1;SRV:;IPV:CAL;SFV:NSPM;H:au-smtp-1.mimecast.com;PTR:au-smtp-1.mimecast.com;CAT:NONE;SFS:;DIR:INB\r\nX-MS-Exchange-CrossTenant-OriginalArrivalTime: 11 Apr 2022 22:32:15.7865\r\n (UTC)\r\nX-MS-Exchange-CrossTenant-Network-Message-Id: c2ef91ac-5ba9-4df4-8b57-08da1c0b2179\r\nX-MS-Exchange-CrossTenant-Id: 23a3863a-4bd3-44ea-9329-af3ee8bc6153\r\nX-MS-Exchange-CrossTenant-AuthSource: ME3AUS01FT008.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-CrossTenant-AuthAs: Anonymous\r\nX-MS-Exchange-CrossTenant-FromEntityHeader: Internet\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: MEYPR01MB8015\r\nX-MS-Exchange-Transport-EndToEndLatency: 00:00:06.9417285\r\nX-MS-Exchange-Processed-By-BccFoldering: 15.20.5144.030\r\nX-Microsoft-Antispam-Mailbox-Delivery: ucf:0;jmr:0;auth:0;dest:I;ENG:(910001)(944506458)(944626604)(920097)(930097)\r\nX-Microsoft-Antispam-Message-Info: =?utf-8?B?ZEY2SGVubHIzK01IM0MxVE5aRnV4TnFjTVJFektPSTRDd3JHQkFhOTllS3R6?=\r\n =?utf-8?B?Smg5akZHT1U1NWU0YmR0U0M4NTNZaEZkYjlYSytCdXFrcXFadmh2dm9CU0Vk?=\r\n =?utf-8?B?ckM3NFRPTTdIODVaUW5ETEh4N2hUUW01SHJiV3N6NzhCd3VNM256bFA2V3p6?=\r\n =?utf-8?B?QjRYc2NWUGcyTlNHSi85L25IaEpGRjNvdUlWVy9rNkpSRmtYUEtoOVBKaUR1?=\r\n =?utf-8?B?cmtIRG1INC9WOWdIL3FWcHBscStmUUREckl5REVIeno5NHd0QUtrZU5UbTIz?=\r\n =?utf-8?B?cEtVV2tWbkE1amZFa0NjTlhnT045OEExUG00OUs2dHFVeEVyemZWSG04OEhB?=\r\n =?utf-8?B?TXhTWGg4Zk5QVVdvQkZXc25NTGRwWDV5bG9oaFNodnhxcTBFWEh2SUlWS2VF?=\r\n =?utf-8?B?dGtnKzBjb2g0dWlPUDFYTWg3UW04L3JISWpSSEVhSDltNXpuRit2QjExOTdn?=\r\n =?utf-8?B?NWIvRFViZ0x3ekJpWkpYMmdHbnczMWx5enhHWlVyQmlCVmdhOWkvcThEOStN?=\r\n =?utf-8?B?b3RtdVJUSGtUNDc4NHMrMnBieFcrRGNxeGVDaUdNd1pzbm9hRVllUWVFRk1Z?=\r\n =?utf-8?B?NVA1eTRmT0NEbnpJTkxRcUZUaHZLdGFvdW5qS0ZsVExtOGNoRGdmLzlaOWZH?=\r\n =?utf-8?B?ZE43NEtBQTRTSzF2U1Z0aDYwMzhEQW81VlhZcGwwMFZQUWpldUpQRy90Q1lJ?=\r\n =?utf-8?B?WDNobmdkajFnUGZsRTR6b2pHbDRYbnp6U1NoVmRMZUo2VE9iNXMycFFaaXFp?=\r\n =?utf-8?B?RnpKSWFQQklJaGV0RnZRQmU0VkVSOE9pcGFrQkxOYzZjVVVUY0NLS095VVZB?=\r\n =?utf-8?B?N1BSYm1KTU1UNkNvR0FIQXlNcUpoRlk1eG5tSjZqNHBDUFZIUlB4cE5xMHNR?=\r\n =?utf-8?B?ajg4a0swK1VXRGJRT0t4eDFMU2l2VEJ2MXJtQnVNZGo1MzBLUFU5a1I3U1Uv?=\r\n =?utf-8?B?RE5UQk9QVHpuS1NJSGVFWUxVR1ZrMmFxQ0tDMTdUclV2SHdRSDRWRlFWTmMy?=\r\n =?utf-8?B?bTRBTHJkUE00ZGhHT21YVnlqWUhrRlNRWlpONHl4NjFSTUgxQkxHYTA5d2Vz?=\r\n =?utf-8?B?SDBDNlZYSzQ2akF2TDFYU3N5R3diRXI0S0VNRTNHQzZoN1B2UWdGWUZFclJG?=\r\n =?utf-8?B?Y2JLeXJFUmkwNUd5bThCUmdRZlpxOFk2VUV2eTlFVWFYaDl2R1diOW5QVWtO?=\r\n =?utf-8?B?eTRCTnRrVUk1dTdpODBmSHdIR01zWjNJZEtHWWFabXB5NW1HSUtUdnkwZjlE?=\r\n =?utf-8?B?c2NBdWJRMi9tV29JY2YvWE5JR0oyL0tRSVFaTzd1aDBHMys4M3I4WjVOSldS?=\r\n =?utf-8?B?WWdMaDBOblAxM00rc3BqMmRjcDE0dE8xbjcxODVyQXdpbkFJa3RBeWttcm5R?=\r\n =?utf-8?B?UzFVSTZZbVdjUWo1c1hhYTRadzV1akNuSy9aUHh5dW1JQ0dQeDFwcW5HYzkv?=\r\n =?utf-8?B?N2oyeXUwaGlTejRCcEQ0U1NZVHppeGpKVHpqakMxT25GYlI5WGIvR0I0SnVt?=\r\n =?utf-8?B?c0tTeDB6aWFlSDF5SWVTOGlJcWJmVEVXQWdzN0dBbzVscXRYbmpqdHgzeU5q?=\r\n =?utf-8?B?Q0x5TXFHWGFWcmt5MDlSdTlFM3o5bE8vSFl1SXA3VUpLN3dnbndnVXF5N3l1?=\r\n =?utf-8?B?UlptWm5oRE5na3NPNWVNWVBPS25welh1bm5nZjZXZVIyM0kybWhQSzczNnMy?=\r\n =?utf-8?B?YVRiTTRaY2JDeDNDNFJPcFFsNExPK0lPZUl4WFEycWttUkFma0l5NTBhZTVG?=\r\n =?utf-8?B?dnZWTXZHenovR1hjN3ZLSGdSRkVobERPVkRzaEJIWE5kWC95cFpMcDhIWlN2?=\r\n =?utf-8?B?eXFQdDFvbUVFWlN1UHZYYjA1dUcrWjNvc0xvcks5WUs1am9sRTNmNVBuYzE3?=\r\n =?utf-8?B?OVNEZ0FlOXJoSGFiWFh4M2poN1ZxM2VDYVFVSGdhOEZ3Y0hHR3o0eG50UE5V?=\r\n =?utf-8?B?UFVDeHg0aTYrd1BlM2ZzQ3NUZWRIMExtV0RJNGo2VDVXOXpIZTNET01GdlRC?=\r\n =?utf-8?B?cEJRYmtnL0VGYTBTN2NCdDczTkYyenZyWEcrREhYdzBEQ2ZYSUlDU05HdnRD?=\r\n =?utf-8?B?ZFZyOVFLSzFQSnc0OHdlMUt2clVvSS9VK3VGRG5lR2N5dkRKdmJ4RGpmWkFk?=\r\n =?utf-8?B?RlRQN1cwWWlQVWE0K21ZWUlhcWdnbG1WL2dCMkxYZ0tRZjRzTTZnZHJ5OFVF?=\r\n =?utf-8?B?dlIzNTZPWUxJRVo2a1FNTGN6azRwQnRNNjhQQUxycG1ZejlEdG5hQzZvaXVp?=\r\n =?utf-8?B?YnRBamszczhlcFdjbWh2L01tc2J0UUZ2Z2NFYWwzTmFGcHIwbFpoRnltdHly?=\r\n =?utf-8?B?bkNnSitPR1hqY09MUXY0c0JDRnpoVzAwcnlkeG45MUlZRW5JajhwRlI3MGU2?=\r\n =?utf-8?B?K01ub0Iya3ZLRHVoWnhxdjdWdTlMbnlqcE9xVUFRUGJSWlg5b3B6d211a29Q?=\r\n =?utf-8?B?WEp2azhub2VqRy8waVdJNDY0MDZleDdKY0gvbysxa0drSUF2ai93ODZaWmJp?=\r\n =?utf-8?B?QmVkNU9CM2habTNxSDF1QkRYRjdQV1RKdisyOURLeWFYdDE0bDB5YkZrbjkr?=\r\n =?utf-8?B?OThXN2lTeGFNcVJkaTlaZW9VMWVSK0QzekpiNTB6Mm1OMmliZnhXU09oOGFG?=\r\n =?utf-8?B?c3MrR3RVSUVwcHFCdE4yTXphaVNtdWdOV1crdGlyMHNlejRTMm9uRzlBbGlZ?=\r\n =?utf-8?B?YyttRU44Ri90K1ZNWWR2VmNPN2doU0dwRSt4YndMSkFUaU4xbUw2dHM3OFhu?=\r\n =?utf-8?B?MHhrbWNaTW1QeHRzUjY5b0wybFU1RTVpN2R4MzJrNUxVMER5alUyd3RsV3FN?=\r\n =?utf-8?Q?9tZDr5jf4puzOOQKjHvJxgebsYoc3lsepLE/4duCli?=\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: quoted-printable\r\n",
                            "lastModifierName": "Jason Du",
                            "creatorSMTPAddress": "jason.du@sentral.com.au",
                            "messageClass": "IPM.Note",
                            "senderAddressType": "SMTP",
                            "sentRepresentingSmtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "lastModifierSMTPAddress": "jason.du@sentral.com.au",
                            "inetAcctName": "jason.du@sentral.com.au",
                            "senderEmail": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "body": "Dear Marcus Mongahan,\r\n\r\nThank you for your interest in enrolling in Caulfield Grammar School. This letter confirms that we have received your enrolment request for:\r\n\r\n\r\n\r\nJohn Li commencing Kinder (3 Year old) in 2025 at Malvern Campus \r\n\r\nLi Li commencing Kinder (3 Year old) in 2025 at Malvern Campus \r\n\r\n\r\nWe have processed an application fee of $ 303.30 (AUD). Your receipt number is 3184455121.\r\n\r\nYour family has now been added to our wait list. When enrolments for your selected year level commence and places become available, a member of our admissions team will be in touch to arrange an enrolment interview.\r\n\r\nShould any of your contact details change or if you have any further questions, please email our team at admissions@caulfieldgs.vic.edu.au <mailto:admissions@caulfieldgs.vic.edu.au> . This will ensure you don't miss out on any important information.\r\n\r\nKind Regards,\r\n\r\nCaulfield Grammar School \r\n"
                        },
                        "innerMsgContent": true,
                        "folderId": 286,
                        "extension": ".eml",
                        "name": "[debug - orginial recipient- monaghanmj44@gmail.com] - Caulfield Grammar School - Enrolment Application Received.eml",
                        "fileName": "[debug - orginial recipient- monaghanmj44@gmail.com] - Caulfield Grammar School - Enrolment Application Received.eml",
                        "fileNameShort": "_debug~1.eml",
                        "pidContentId": "F9E694B987842244AA9CD4F931286CF2@ausprd01.prod.outlook.com",
                        "creationTime": "Mon, 11 Apr 2022 22:45:29 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT"
                    },
                    {
                        "dataType": "attachment",
                        "innerMsgContentFields": {
                            "dataType": "msg",
                            "attachments": [],
                            "recipients": [
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "brendan.woods@x-team.com",
                                    "email": "brendan.woods@x-team.com",
                                    "smtpAddress": "brendan.woods@x-team.com",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "name": "Marcus Monaghan",
                                    "smtpAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                                    "email": "/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=user25584d2d",
                                    "addressType": "EX",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "email": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "smtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                                    "recipType": "to"
                                },
                                {
                                    "dataType": "recipient",
                                    "addressType": "SMTP",
                                    "name": "edmund.chan@xwp.co",
                                    "email": "edmund.chan@xwp.co",
                                    "smtpAddress": "edmund.chan@xwp.co",
                                    "recipType": "to"
                                }
                            ],
                            "senderName": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "senderSmtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "subject": "[debug - orginial recipient: monaghanmj44@gmail.com] : Caulfield Grammar School - Enrolment Application Received",
                            "headers": "Received: from MEAPR01MB3766.ausprd01.prod.outlook.com (2603:10c6:201:3f::10)\r\n by ME2PR01MB4035.ausprd01.prod.outlook.com with HTTPS; Mon, 11 Apr 2022\r\n 22:35:59 +0000\r\nARC-Seal: i=3; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=pass;\r\n b=CQzj2xzpfynplBKgem8MwXr0u6xaE3cZVnhiqPP7/BbDmDgyQv9cx+9KTisosIQoVAZ9odZgweGQuGCFGYPJ/aEPiqStxJlvDeL0Bsb3Ppni7CTaj0B/yOq9hq1k0xZadi6yd3GXPMkH+nJYnvEVEUCrRC0VJV/sG8Sm+hGv5frQsO7KRBD6tN3KOIYVNegCglBbjR2R5Aa7rrjIO6VbSXDbMEhTdwGeHL2t9m4zPModQn1/2B34LFT0K/OoaZ8D5jkwQAyU5gPimsMBpmsHYzmk/+Oi30puephZqBTY68QiV75Ts2Yh1HWDAnGDshQ4rhlPTFelj8U/epBoMKkroQ==\r\nARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;\r\n s=arcselector9901;\r\n h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;\r\n bh=VNJI2Vvxft6DRBc3PwgXWH2oyYNaUkvy0KXj2DLasJY=;\r\n b=RUJmmMImvoCnGsMIxM+nl20DAqDrnfbd9mXDMppw8u5YLWCj6YkSfZBY+Hnyc5tdjMpB3xiDWwQsICOi51ovUGJpwKpkAaTearWVrvL0lZ7uEmmH9kTGNgQW6UhLWvp56NGlOdjDwGkmLI3yattxXBw5FKGfeBr3ARPMwe6qQsjqzDhn8QQm66FCcEi/8k9EuX/0dkI984GU1TkG0Thd+0PwYnDodPpfQFSnm34L6nP2Znss5erLEh7DXNBOad5DU3YH3lKto9GF1PaLzAYyU0leLIXBmpjjaJ66akJTfPAE5Ctt2XsJMbAG7AxUhzZeYZqYBPmKeX+3P1tCXQmICQ==\r\nARC-Authentication-Results: i=3; mx.microsoft.com 1; spf=softfail (sender ip\r\n is 124.47.150.22) smtp.rcpttodomain=caulfieldgs.vic.edu.au\r\n smtp.mailfrom=mail1.wpengine.com; dmarc=fail (p=none sp=none pct=100)\r\n action=none header.from=caulfieldgs.vic.edu.au; dkim=fail (body hash did not\r\n verify) header.d=mail1.wpengine.com; arc=pass (0 oda=0 ltdi=0 93)\r\nReceived: from ME2PR01CA0228.ausprd01.prod.outlook.com (2603:10c6:220:19::24)\r\n by MEAPR01MB3766.ausprd01.prod.outlook.com (2603:10c6:201:3f::10) with\r\n Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29; Mon, 11 Apr\r\n 2022 22:35:54 +0000\r\nReceived: from ME3AUS01FT007.eop-AUS01.prod.protection.outlook.com\r\n (2603:10c6:220:19:cafe::c3) by ME2PR01CA0228.outlook.office365.com\r\n (2603:10c6:220:19::24) with Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29 via Frontend\r\n Transport; Mon, 11 Apr 2022 22:35:54 +0000\r\nAuthentication-Results: spf=softfail (sender IP is 124.47.150.22)\r\n smtp.mailfrom=mail1.wpengine.com; dkim=fail (body hash did not verify)\r\n header.d=mail1.wpengine.com;dmarc=fail action=none\r\n header.from=caulfieldgs.vic.edu.au;compauth=none reason=905\r\nReceived-SPF: SoftFail (protection.outlook.com: domain of transitioning\r\n mail1.wpengine.com discourages use of 124.47.150.22 as permitted sender)\r\nReceived: from au-smtp-1.mimecast.com (124.47.150.22) by\r\n ME3AUS01FT007.mail.protection.outlook.com (10.114.155.153) with Microsoft\r\n SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n 15.20.5144.20 via Frontend Transport; Mon, 11 Apr 2022 22:35:54 +0000\r\nARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed;\r\n\td=dkim.mimecast.com; s=201903; t=1649716553;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t content-transfer-encoding:content-transfer-encoding:dkim-signature;\r\n\tbh=VNJI2Vvxft6DRBc3PwgXWH2oyYNaUkvy0KXj2DLasJY=;\r\n\tb=B8Cj/rFd08Dn2WdDtLhozOWESl5UXLQQ3Mz1eyPTJB4GGUxQ+1ecjl5/97Ap4FqLUypPq5\r\n\tFalwor2KgfcSms+F+epG23pAdxnVRwD7pC93Uf4uqM2gNW9ECVJ21WNck/ArN7nkwWxaFu\r\n\tQpAY9aG+zV+EV5/BUfUbXqmTVEBXOhqNLmHf1mOJgjxdysLMVE1nSxAFEBWjJ+SZ1q99Ex\r\n\tmJfJp/UEORBgmlTSPauXSdbxM4FJgC8iC0dWUHXJyU8/rZ5UDpMljpkeEyIACGrV3qczFO\r\n\te7bqgCG77zgI0oL+tKQQoD/zkpHPmNCOjzluVgke3DSB1drRZGJU0+wlKQp4hQ==\r\nARC-Seal: i=2; s=201903; d=dkim.mimecast.com; t=1649716553; a=rsa-sha256;\r\n\tcv=pass;\r\n\tb=MYkhH6x3fTiUNx1f+d/r8/8VXrlqO3PebDfELpTnm4xtLbTZ9Z4eSMgyf1T0M3tJ/3pzJr\r\n\t+j+Hx47DwYWQfokfn+mFR+RsAfRTDQIBN0VbSFZBAfjzFQkxm8HJfTSnYafqgMO8yFqpko\r\n\tk+BYf4IywtudnZLAQDgupxpbR89x0c96l2+hOzg+mmmtCCjQjY0sPFNvT89P+ZwpsUijwF\r\n\tESAVkOmJD9EP5lWW0c1TA7yGOrz8Ncc1Clgl5Yix+UlpDLOId+sYzXqD5jW7vT3o+xvKzf\r\n\tlk94XIS/eeAMWW627DF/x4dZsqhRCNzvtOh1BK+UOTTiRIXXE+hCt5S9pFsyBw==\r\nARC-Authentication-Results: i=2;\r\n\trelay.mimecast.com;\r\n\tdkim=pass header.d=mail1.wpengine.com header.s=mx header.b=Q+s42VS7;\r\n\tarc=pass (\"mailchannels.net:s=arc-2022:i=1\");\r\n\tdmarc=fail reason=\"SPF not aligned (relaxed), DKIM not aligned (relaxed)\" header.from=caulfieldgs.vic.edu.au (policy=none);\r\n\tspf=pass (relay.mimecast.com: domain of \"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\" designates 23.83.209.29 as permitted sender) smtp.mailfrom=\"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\"\r\nReceived: from camel.birch.relay.mailchannels.net\r\n (camel.birch.relay.mailchannels.net [23.83.209.29]) by relay.mimecast.com\r\n with ESMTP with STARTTLS (version=TLSv1.2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n au-mta-104-kzRF6ORFOOmkA3rA0gIKOQ-1; Tue, 12 Apr 2022 08:35:52 +1000\r\nX-MC-Unique: kzRF6ORFOOmkA3rA0gIKOQ-1\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from relay.mailchannels.net (localhost [127.0.0.1])\r\n\tby relay.mailchannels.net (Postfix) with ESMTP id 64BF32A10B3;\r\n\tMon, 11 Apr 2022 22:35:49 +0000 (UTC)\r\nReceived: from pod-171985 (unknown [127.0.0.6])\r\n\t(Authenticated sender: wpengine)\r\n\tby relay.mailchannels.net (Postfix) with ESMTPA id 27EAA2A0453;\r\n\tMon, 11 Apr 2022 22:35:48 +0000 (UTC)\r\nARC-Seal: i=1; s=arc-2022; d=mailchannels.net; t=1649716548; a=rsa-sha256;\r\n\tcv=none;\r\n\tb=WrDmkKOAZdFrl2eIdREMPeEunCJs1G40YhI+ZOhcNyftXQiDEZgDKJOzKKAId64G1OXJsh\r\n\tig8qQyGhw0DvExR+pnYoZsPJ1u1mUrf7I07g9XNsN1licD7ObMnh9QkuGGjJQGzLy0cUc/\r\n\tfMHdBwoEfYO29Je+eUaQCdeAItdAes00XsUC9SJt3aVLt93CZFszTvH3QPa95I4uoXCcW8\r\n\tYnl724WSQoEjnnPNfsukpD5FhZM8vNY1GH+sX6E2zq2dippnkE1G/K+X/8U8OHJru7q4El\r\n\t5yeFgG49fDgSax7Bi8DJl8shuyFxVooK8HBlDi+yy+QopWnTVsjI5Tbv6he2mg==\r\nARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed;\r\n d=mailchannels.net;\r\n\ts=arc-2022; t=1649716548;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:mime-version:mime-version:content-type:content-type:\r\n\t dkim-signature; bh=rz7p4IhvvkH6NYvW9WuTwMTkuKBx1G8oAEBc4jL/7Ss=;\r\n\tb=49vTybVwA8Hr5i7vfX2C7rxsAcAS3E8c4MDSfpzLa2AlV8Ht21z7Ir3dKui86PkLDGL5uo\r\n\tHYGq0yL7xQP+ezcl3PbTB4qvzFDzMck0k5HmD69fiJqAnXyEJfHdDOiWIdcs1HqZBsqhE+\r\n\tuvmpASPKCFAFOa1AWRl8B0fSR9uQ8lvLJSUb/iprEILhulPTnqviyIFyP8gon/pM0+hFQP\r\n\ttS5WrsX31WhO6cFe7czE1VRZsR7Bu9c2bZwJWLNnaLIhSdOl/ZyGSqr4Mp8uCAHCEXkfWJ\r\n\tpLHhTm0oDZPBbwR+0RxAvWmdizlpnLQPuKsx6c2lJ8rP/5Wpelh3TcAGC2yGAA==\r\nARC-Authentication-Results: i=1;\r\n\trspamd-59b985b6b8-w8zfl;\r\n\tauth=pass smtp.auth=wpengine\r\n smtp.mailfrom=\"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\"\r\nX-Sender-Id: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nReceived: from pod-171985 (30.251.87.34.bc.googleusercontent.com\r\n [34.87.251.30])\r\n\t(using TLSv1.3 with cipher TLS_AES_256_GCM_SHA384)\r\n\tby 100.112.55.197 (trex/6.7.1);\r\n\tMon, 11 Apr 2022 22:35:49 +0000\r\nX-MC-Relay: Neutral\r\nX-MailChannels-SenderId: wpengine|x-authuser|1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nX-MailChannels-Auth-Id: wpengine\r\nX-Snatch-Desert: 6be24b9f17f4874b_1649716549153_985958872\r\nX-MC-Loop-Signature: 1649716549153:1177014959\r\nX-MC-Ingress-Time: 1649716549153\r\nReceived: from pod-171985 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with ESMTP id 53A3BBDEE5;\r\n\tMon, 11 Apr 2022 22:35:46 +0000 (UTC)\r\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=mail1.wpengine.com;\r\n\ts=mx; t=1649716546; bh=oyUmbhvA9dCTdg0oB3kpSiSsQjN/HiZesLMsqU3fbZQ=;\r\n\th=To:Subject:Date:From:From;\r\n\tb=Q+s42VS7oMc0P+8PulwOsJuHOhuQqRAxuV6IyLSC7zxAe1hUUULO+yyg+yx0E2Ins\r\n\t lhZeUOPv255SPSJBA/drA3oYgM6TOrk2X3PP1eVQSnpwuy2lXpOosftA/eVAsi3yJ2\r\n\t 0ktwDfTfJfqEzRNvKwcAIETveRgyB8Xm8wIva7UA2V1wBa67QyXYDgt8Zsq9Kaith1\r\n\t FvV50JcDZHuSDidQOSrXEMBg6DsoSfTiq/MlgwHkVfSbROCw9o7IG8fgr9X+r/GJrQ\r\n\t aTbFO5uIOCH7mNpWoxRsqSwfgpdNhAbw1fbvEcDTtAup/Z6EEIAzbXVzam0wPAYhqd\r\n\t lvTpVOp19R/Sw==\r\nReceived: from pod-171985:apache2_74:242 (localhost [127.0.0.1])\r\n\tby pod-171985 (Postfix) with SMTP id 50D8FC90DE;\r\n\tMon, 11 Apr 2022 22:35:45 +0000 (UTC)\r\nReceived: by pod-171985:apache2_74:242 (sSMTP sendmail emulation); Mon, 11 Apr 2022 22:35:45 +0000\r\nX-AuthUser: 1d148796d8b50760147b02e8e8c8a74bc159e0cb\r\nTo: brendan.woods@x-team.com, uat_wpclifeadmin@caulfieldgs.vic.edu.au, MarcusMonaghan@caulfieldgs.vic.edu.au, edmund.chan@xwp.co\r\nSubject: =?us-ascii?Q?[debug_-_orginial_recipient:_monaghanmj44@gmail?=  =?us-ascii?Q?.com]_:_Caulfield_Grammar_School_-_Enrolment_Ap?=  =?us-ascii?Q?plication_Received?=\r\nX-PHP-Originating-Script: 33:PHPMailer.php\r\nDate: Mon, 11 Apr 2022 22:35:45 +0000\r\nFrom: \"uat_wpclifeadmin@caulfieldgs.vic.edu.au\" <uat_wpclifeadmin@caulfieldgs.vic.edu.au>\r\nMessage-ID: <QTL9P1TynHk5HAMv5bqsGCfkXgCqeTcLnVMeVt99vWo@clifestaging.wpengine.com>\r\nX-Mailer: PHPMailer 6.5.3 (https://github.com/PHPMailer/PHPMailer)\r\nAuthentication-Results-Original: relay.mimecast.com;\tdkim=pass\r\n header.d=mail1.wpengine.com header.s=mx header.b=Q+s42VS7;\tarc=pass\r\n (\"mailchannels.net:s=arc-2022:i=1\");\tdmarc=fail reason=\"SPF not aligned\r\n (relaxed), DKIM not aligned (relaxed)\" header.from=caulfieldgs.vic.edu.au\r\n (policy=none);\tspf=pass (relay.mimecast.com: domain of\r\n \"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\" designates\r\n 23.83.209.29 as permitted sender)\r\n smtp.mailfrom=\"uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\"\r\nX-Mimecast-Spam-Score: 3\r\nX-Mimecast-Impersonation-Protect: Policy=Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nX-Mimecast-Impersonation-Protect: Policy=VIP Impersonation Protection Definition;Similar Internal Domain=false;Similar Monitored External Domain=false;Custom External Domain=false;Mimecast External Domain=false;Newly Observed Domain=false;Internal User Name=false;Custom Display Name List=false;Reply-to Address Mismatch=false;Targeted Threat Dictionary=false;Mimecast Threat Dictionary=false;Custom Threat Dictionary=false\r\nReturn-Path: uat_wpclifeadmin=caulfieldgs.vic.edu.au@mail1.wpengine.com\r\nX-MS-Exchange-Organization-ExpirationStartTime: 11 Apr 2022 22:35:54.3612\r\n (UTC)\r\nX-MS-Exchange-Organization-ExpirationStartTimeReason: OriginalSubmit\r\nX-MS-Exchange-Organization-ExpirationInterval: 1:00:00:00.0000000\r\nX-MS-Exchange-Organization-ExpirationIntervalReason: OriginalSubmit\r\nX-MS-Exchange-Organization-Network-Message-Id: 7ee7ad48-e8fe-4c49-a139-08da1c0ba3bc\r\nX-EOPAttributedMessage: 0\r\nX-EOPTenantAttributedMessage: 23a3863a-4bd3-44ea-9329-af3ee8bc6153:0\r\nX-MS-Exchange-Organization-MessageDirectionality: Incoming\r\nX-MS-PublicTrafficType: Email\r\nX-MS-Exchange-Organization-AuthSource: ME3AUS01FT007.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-Organization-AuthAs: Anonymous\r\nX-MS-Office365-Filtering-Correlation-Id: 7ee7ad48-e8fe-4c49-a139-08da1c0ba3bc\r\nX-MS-TrafficTypeDiagnostic: MEAPR01MB3766:EE_\r\nX-MS-Exchange-Organization-SCL: -1\r\nX-Microsoft-Antispam: BCL:0\r\nX-Forefront-Antispam-Report: CIP:124.47.150.22;CTRY:AU;LANG:en;SCL:-1;SRV:;IPV:CAL;SFV:NSPM;H:au-smtp-1.mimecast.com;PTR:au-smtp-1.mimecast.com;CAT:NONE;SFS:;DIR:INB\r\nX-MS-Exchange-CrossTenant-OriginalArrivalTime: 11 Apr 2022 22:35:54.3144\r\n (UTC)\r\nX-MS-Exchange-CrossTenant-Network-Message-Id: 7ee7ad48-e8fe-4c49-a139-08da1c0ba3bc\r\nX-MS-Exchange-CrossTenant-Id: 23a3863a-4bd3-44ea-9329-af3ee8bc6153\r\nX-MS-Exchange-CrossTenant-AuthSource: ME3AUS01FT007.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-CrossTenant-AuthAs: Anonymous\r\nX-MS-Exchange-CrossTenant-FromEntityHeader: Internet\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: MEAPR01MB3766\r\nX-MS-Exchange-Transport-EndToEndLatency: 00:00:05.0872420\r\nX-MS-Exchange-Processed-By-BccFoldering: 15.20.5144.030\r\nX-Microsoft-Antispam-Mailbox-Delivery: ucf:0;jmr:0;auth:0;dest:I;ENG:(910001)(944506458)(944626604)(920097)(930097)\r\nX-Microsoft-Antispam-Message-Info: =?utf-8?B?aHMxa1lBNXAwTmNQWk51blYwbmVUeldLemN6RVZCQmh6WkRvaUZlYkFrTjJ6?=\r\n =?utf-8?B?MnR1QWJqd3lxOTdBZzUzeVpnazcvMkN5dWtjOHRjT1NLbTRSTENwVU9xdzhV?=\r\n =?utf-8?B?cFhEN0pGYkRORjIrYUhJVnJDb2pWeVFSMWFWdVNjeFhYS2kxWC80QlBNc01r?=\r\n =?utf-8?B?bUhkK2J1SHl2OUFSV0lxRzhwVUpTYnBJRkNLd0N6T08rRGFmdHBQSEpPRk9X?=\r\n =?utf-8?B?bG1HaHMvT29jK1RnNTVDdENsNWNwV2taK2EzRnFLYklrQ0hQV2xyQ3EyWS9L?=\r\n =?utf-8?B?SkF4U0pjcGZiSU16YjFRZm5ick1YUmtjNldOTktOOS9zLzViMFQwWHdtTjVY?=\r\n =?utf-8?B?L08vRjVVWTdycTE2ZUVOTDFrZ1RiUDNQRTd4VHlMMmN5ZW5LWWU0ZThtTE1k?=\r\n =?utf-8?B?UnFickx2ekhIUkpsQlNXNDlWMUxwNFJyMEJyajhSczZzVXNJQ2tFSFdpVTBE?=\r\n =?utf-8?B?aXZCY3RCemtuSVRXcllZc0VQb2NPWmNEdlZ1YVRDQlI3eEJHUXpNTGxtVE5k?=\r\n =?utf-8?B?MWhwTnZ2eUhuakVsRzVlcmg5enErTjczRDRuY2NPL3QrNCtiTjByRlFyQTAz?=\r\n =?utf-8?B?NjBFT0JoVXp4azZucnJ5QWhWcElROVM3czcwaGMzcTdaWWlVc1ZocEpzSElY?=\r\n =?utf-8?B?TXI2Yk1LM3o3aG41Qm5xRyt5cWR6cXMrczJsTGt6UWM3aXpoZG9raEdhMWdy?=\r\n =?utf-8?B?OWwxMnpJeGgzN2k0Q0ZzNUhib2FCMFdYUlVBSU02SHJVd3dYSGJJUFROWnND?=\r\n =?utf-8?B?ZjVLYXBadUJUa280UmFKaEdwSEprRWpKb3NsRUZzR2xPb3ZueVM1c2wvc3hJ?=\r\n =?utf-8?B?TFhYQzhjRVVSWFBZamw5anRjWVV6elNCM3NnTU5NLzF6NEw2Z05FUjVVNHhl?=\r\n =?utf-8?B?M0J5QmtiVDQybmVqYjFwN2QrSVh2YkVZaGhVN2Y2cENNZGNzV0cyZGRCSHpK?=\r\n =?utf-8?B?S2tLZ1BBRGRaaEFMZk1zK1BMQld0U0FycG1uT0NLbkpSeEF0N3hPVFpSejB3?=\r\n =?utf-8?B?SGdHSkJOMDNhRmVvVXFibVVqVVRTdmRhYW90OFBVMkFrbnJoVHlFdEZSemR3?=\r\n =?utf-8?B?NkpLdGJNbmZrR20yWjZEL1NrSFpSNnBFNzNnOGt2dHNJUTM4TzZJbS96VUdQ?=\r\n =?utf-8?B?YVBCZlUrYk02aVpITFhINVlxN2FycStISVpRdENSWGU4OFBFcGFRemZSYnFk?=\r\n =?utf-8?B?Q1pVMXBqM3Y2QW84dVFTay9BUFFjcEZlcS8zaXRtUXZsMjFJUGZ2VzFjWUtN?=\r\n =?utf-8?B?MmZmMGFQUXJ5WTIzeGl1MDBlWlFFUGFUcmhZSjJscGd5YlMzYXVLWEFnU0lG?=\r\n =?utf-8?B?MzVmTXU2dU8yVHV1UDdlZ2ZYK3JZYnZPRzZqS01lS3Q3ek13OWhJZFlMQXNB?=\r\n =?utf-8?B?Wk1XS2w3L1JiQlZESjh4OHFMTWxjVEJ2N1IyN1ZyTmFaVy9Bd3FMZnladHFw?=\r\n =?utf-8?B?WkdaNlpZWGc4QVRhMjZ2YWpjVXp4VXBnc3dVdEFZZVhrQkdsYkxrcE9zdTZ1?=\r\n =?utf-8?B?OGNhTXdPMzJldVdWL0UzaURxaEh4MVlYMDZHL09rS1Z0YzRHRG1QYUVLMTFs?=\r\n =?utf-8?B?QUFES1BESjhUTm5XRnBJZVNiZ254TXd5K09JbUFFNnhxNjdlcDdnSGJiMVA1?=\r\n =?utf-8?B?a0lJRzhINE5pQkdBS3p6MzVDQVNncVVCcnZvTWhSVHRaY3FsQ3VFa1JQbFF6?=\r\n =?utf-8?B?a1YzVXRqRlgwSnJXQzhxSElJcndZMEc1VS9pN1lhT05QR3BlS3ZHSDRjY1BB?=\r\n =?utf-8?B?RGwzamU3WVBKQzIxV2IycVdONE9rTHNDTEZCb3JaWnd1dHNmMGZhSVZaa2hQ?=\r\n =?utf-8?B?SFhaWmwwMS9wRHk1NDY3TEdJNDhSVVZ6Q29uOVlnSEFBN2pxWjZ2cFNmT3VZ?=\r\n =?utf-8?B?MGtLdSs0aklmQTNTTkVWMjc1WTNKMlJaODczUVdndkgvTm1aZmxqbThKeHgr?=\r\n =?utf-8?B?eXVwMGRQSkZpMkxtbjJFZGd3KzdyTUNOSWhqVUZBdE1HL1RTb0FaUm5yRDIx?=\r\n =?utf-8?B?RWwrSjBSOENrVEpiRWtVVE9xN29hai9QVlgxS1lST05sWklpMHlsV2tTZ3NO?=\r\n =?utf-8?B?eFVMdVc5dGZ6R2lMSDcrYmpDSks1K00wWW52Y2UvWmZFemVoTWNXcmtIWThj?=\r\n =?utf-8?B?cjhrVzZBclJ4Y1owZytSSjFMNk9nZTRxNnVPQ053RUFpL0FWZXNxZStnR2d4?=\r\n =?utf-8?B?TUN6ZFFUZnRsUnVja1F1T2h1K2Q1TFpPNXlucm9LL0VnTlJqU1dwbE5FVXF4?=\r\n =?utf-8?B?K2NwM08rdm9iQTVHT01FbXJqbk9qMU8weEdKSzNPaVJaM3VUdmNBYVdrMEcw?=\r\n =?utf-8?B?MEo4ZFFJNGxsKzhiNVdrMktnMitlbmZ3VzIzMUpGeTU5K25PbnJYM0xGT3Zl?=\r\n =?utf-8?B?R0piVXg1Tk1rTXFNeFdVK1phakk2aVNNZkhkOTBBNDJ4TDFkZjEwbWR1RC93?=\r\n =?utf-8?B?QmNMaURhOXIvcXFuQVhudmtaS1NPd1ZYbzBBVEVMZGE4RFd0Qy9lcFNHUTht?=\r\n =?utf-8?B?K2liM0l4UGNia1FldmcxS1IyOGdJT29iTVVsdHJWdjFsMDdnRW1iY0VXZVla?=\r\n =?utf-8?B?TldBS1RtdVJRbktTOEZWZzlzTll2dmNyUWZTZ1d6bkViaHUvL3JGVEVZVUpZ?=\r\n =?utf-8?B?RGtHejQ1NTJ2RWl1aGtCVDkrK0E5a1pINUZVeE0xYzUvYmFHM3M4b284bnBk?=\r\n =?utf-8?B?K2RId0JtRmxkS3ZJdVduN00zVmdBTndIdlNtYXFLbTFTVVRyREhKMzdUb21l?=\r\n =?utf-8?B?YlNiYk1meDZKZ0NqRE9HTnJmOEVWVjBFYWhwbjdxamp2dXpnZHZYckJOa29u?=\r\n =?utf-8?Q?AnxItUYadJolrcvqWEcg0l8gl5yu33gI7WHYmd+pAJ?=\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: quoted-printable\r\n",
                            "lastModifierName": "Jason Du",
                            "creatorSMTPAddress": "jason.du@sentral.com.au",
                            "messageClass": "IPM.Note",
                            "senderAddressType": "SMTP",
                            "sentRepresentingSmtpAddress": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "lastModifierSMTPAddress": "jason.du@sentral.com.au",
                            "inetAcctName": "jason.du@sentral.com.au",
                            "senderEmail": "uat_wpclifeadmin@caulfieldgs.vic.edu.au",
                            "body": "Dear Marcus Mongahan,\r\n\r\nThank you for your interest in enrolling in Caulfield Grammar School. This letter confirms that we have received your enrolment request for:\r\n\r\n\r\n\r\nMarcus Mongahan commencing Kinder (3 Year old) in 2025 at Malvern Campus \r\n\r\n\r\nWe have processed an application fee of $ 151.65 (AUD). Your receipt number is 3184455166.\r\n\r\nYour family has now been added to our wait list. When enrolments for your selected year level commence and places become available, a member of our admissions team will be in touch to arrange an enrolment interview.\r\n\r\nShould any of your contact details change or if you have any further questions, please email our team at admissions@caulfieldgs.vic.edu.au <mailto:admissions@caulfieldgs.vic.edu.au> . This will ensure you don't miss out on any important information.\r\n\r\nKind Regards,\r\n\r\nCaulfield Grammar School \r\n"
                        },
                        "innerMsgContent": true,
                        "folderId": 264,
                        "extension": ".eml",
                        "name": "[debug - orginial recipient- monaghanmj44@gmail.com] - Caulfield Grammar School - Enrolment Application Received.eml",
                        "fileName": "[debug - orginial recipient- monaghanmj44@gmail.com] - Caulfield Grammar School - Enrolment Application Received.eml",
                        "fileNameShort": "_debug~1.eml",
                        "pidContentId": "E04E51FC154E8844AE495C00A2BBBEBD@ausprd01.prod.outlook.com",
                        "creationTime": "Mon, 11 Apr 2022 22:54:11 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT"
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image005.png",
                        "fileName": "image005.png",
                        "dataId": 803,
                        "contentLength": 28454,
                        "fileNameShort": "image005.png",
                        "pidContentId": "image005.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:24 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image009.png",
                        "fileName": "image009.png",
                        "dataId": 759,
                        "contentLength": 4259,
                        "fileNameShort": "image009.png",
                        "pidContentId": "image009.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:26 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image001.png",
                        "fileName": "image001.png",
                        "dataId": 847,
                        "contentLength": 12944,
                        "fileNameShort": "image001.png",
                        "pidContentId": "image001.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:22 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image004.png",
                        "fileName": "image004.png",
                        "dataId": 814,
                        "contentLength": 1932,
                        "fileNameShort": "image004.png",
                        "pidContentId": "image004.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:24 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image006.png",
                        "fileName": "image006.png",
                        "dataId": 792,
                        "contentLength": 3843,
                        "fileNameShort": "image006.png",
                        "pidContentId": "image006.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:25 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image008.png",
                        "fileName": "image008.png",
                        "dataId": 770,
                        "contentLength": 4680,
                        "fileNameShort": "image008.png",
                        "pidContentId": "image008.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:26 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image010.png",
                        "fileName": "image010.png",
                        "dataId": 748,
                        "contentLength": 12945,
                        "fileNameShort": "image010.png",
                        "pidContentId": "image010.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:27 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    },
                    {
                        "dataType": "attachment",
                        "extension": ".png",
                        "name": "image002.png",
                        "fileName": "image002.png",
                        "dataId": 836,
                        "contentLength": 1691,
                        "fileNameShort": "image002.png",
                        "pidContentId": "image002.png@01D8347A.2040ED10",
                        "creationTime": "Mon, 11 Apr 2022 22:55:23 GMT",
                        "lastModificationTime": "Mon, 11 Apr 2022 22:56:55 GMT",
                        "attachmentHidden": true
                    }
                ],
                "recipients": [
                    {
                        "dataType": "recipient",
                        "name": "Jason Du",
                        "smtpAddress": "jason.du@sentral.com.au",
                        "email": "/o=ExchangeLabs/ou=Exchange Administrative Group (FYDIBOHF23SPDLT)/cn=Recipients/cn=cd85501b4b0a4d15ab034d041dc0fbe0-JasonDu",
                        "addressType": "EX",
                        "recipType": "to"
                    },
                    {
                        "dataType": "recipient",
                        "addressType": "SMTP",
                        "name": "edmund.chan@xwp.com",
                        "email": "edmund.chan@xwp.com",
                        "smtpAddress": "edmund.chan@xwp.com",
                        "recipType": "cc"
                    }
                ],
                "lastModifierSMTPAddress": "jason.du@sentral.com.au",
                "messageClass": "IPM.Note",
                "sentRepresentingSmtpAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                "subject": "Re: Sentral Case #00448180 - Admissions: (105047) Missing Applications between Portal and Sentral Admissions",
                "lastModifierName": "Jason Du",
                "headers": "Received: from ME1PR01MB1603.ausprd01.prod.outlook.com (2603:10c6:200:1f::7)\r\n by SYCPR01MB5168.ausprd01.prod.outlook.com with HTTPS; Mon, 11 Apr 2022\r\n 22:56:54 +0000\r\nReceived: from ME3P282CA0029.AUSP282.PROD.OUTLOOK.COM (2603:10c6:220:f0::16)\r\n by ME1PR01MB1603.ausprd01.prod.outlook.com (2603:10c6:200:1f::7) with\r\n Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29; Mon, 11 Apr\r\n 2022 22:56:33 +0000\r\nReceived: from ME3AUS01FT005.eop-AUS01.prod.protection.outlook.com\r\n (2603:10c6:220:f0:cafe::29) by ME3P282CA0029.outlook.office365.com\r\n (2603:10c6:220:f0::16) with Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29 via Frontend\r\n Transport; Mon, 11 Apr 2022 22:56:32 +0000\r\nAuthentication-Results: spf=pass (sender IP is 103.96.23.111)\r\n smtp.mailfrom=caulfieldgs.vic.edu.au; dkim=pass (signature was verified)\r\n header.d=caulfieldgs.vic.edu.au;dmarc=pass action=none\r\n header.from=caulfieldgs.vic.edu.au;compauth=pass reason=100\r\nReceived-SPF: Pass (protection.outlook.com: domain of caulfieldgs.vic.edu.au\r\n designates 103.96.23.111 as permitted sender)\r\n receiver=protection.outlook.com; client-ip=103.96.23.111;\r\n helo=au-smtp-delivery-111.mimecast.com;\r\nReceived: from au-smtp-delivery-111.mimecast.com (103.96.23.111) by\r\n ME3AUS01FT005.mail.protection.outlook.com (10.114.155.78) with Microsoft SMTP\r\n Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n 15.20.5144.20 via Frontend Transport; Mon, 11 Apr 2022 22:56:32 +0000\r\nDKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=caulfieldgs.vic.edu.au;\r\n\ts=mimecast20190314; t=1649717792;\r\n\th=from:from:reply-to:subject:subject:date:date:message-id:message-id:\r\n\t to:to:cc:cc:mime-version:mime-version:content-type:content-type:\r\n\t in-reply-to:in-reply-to:references:references;\r\n\tbh=0ot2kKXDNOurEsdrngGR4Av0IvV/byplcE8QJ2W4mQg=;\r\n\tb=s1cbm+Xgjy1Tjqw62ugznbTXcYJh7MoY6ysIiyaD5ulj0PzVgXRu41xJIwiUrKSz6+Y71k\r\n\tF8SD8QbFAgAJYhw4BbNiCFemUuBeh/BMQmkzRRCGYvRJg4D2gwC7opYr87VrlQOOerUuIy\r\n\toml7vbDJkJzcHrxKb0X4k0wyi+2JQsYYCRAgf+r9T1xfCQRNByFZs0EEysaO2w19boB3Z/\r\n\tjPuMGTEBDtd5OSQ3YbEk6Wc+dX3P0738xhB4oGjXS4uMw2POYYLHb8E7qZiz597uXukaFC\r\n\ty8Itykiq8m0ZmUmciioLoFE3VMTuDuPlKRckZwMYB+otVQmiS8FGIDRnCNJLuw==\r\nReceived: from AUS01-SY4-obe.outbound.protection.outlook.com\r\n (mail-sy4aus01lp2168.outbound.protection.outlook.com [104.47.71.168]) by\r\n relay.mimecast.com with ESMTP with STARTTLS (version=TLSv1.2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n au-mta-36-D1Ir2k2kNjGezOh2C3pBng-1; Tue, 12 Apr 2022 08:56:26 +1000\r\nX-MC-Unique: D1Ir2k2kNjGezOh2C3pBng-1\r\nReceived: from SYXPR01CA0130.ausprd01.prod.outlook.com (2603:10c6:0:30::15) by\r\n MEAPR01MB3511.ausprd01.prod.outlook.com (2603:10c6:201:38::18) with Microsoft\r\n SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id\r\n 15.20.5144.30; Mon, 11 Apr 2022 22:56:12 +0000\r\nReceived: from SY4AUS01FT006.eop-AUS01.prod.protection.outlook.com\r\n (2603:10c6:0:30:cafe::7c) by SYXPR01CA0130.outlook.office365.com\r\n (2603:10c6:0:30::15) with Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29 via Frontend\r\n Transport; Mon, 11 Apr 2022 22:56:12 +0000\r\nX-MS-Exchange-Authentication-Results: spf=fail (sender IP is 13.70.157.244)\r\n smtp.mailfrom=caulfieldgs.vic.edu.au; dkim=none (message not signed)\r\n header.d=none;dmarc=fail action=none header.from=caulfieldgs.vic.edu.au\r\nReceived: from au2.smtp.exclaimer.net (13.70.157.244) by\r\n SY4AUS01FT006.mail.protection.outlook.com (10.114.156.122) with Microsoft\r\n SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384) id\r\n 15.20.5144.20 via Frontend Transport; Mon, 11 Apr 2022 22:56:11 +0000\r\nReceived: from AUS01-ME3-obe.outbound.protection.outlook.com (104.47.71.240)\r\n\t by au2.smtp.exclaimer.net (13.70.157.244) with Exclaimer Signature Manager\r\n\t ESMTP Proxy au2.smtp.exclaimer.net (tlsversion=TLS12,\r\n\t tlscipher=TLS_ECDHE_WITH_AES256_SHA384); Mon, 11 Apr 2022 22:56:11 +0000\r\nX-ExclaimerHostedSignatures-MessageProcessed: true\r\nX-ExclaimerProxyLatency: 15438816\r\nX-ExclaimerImprintLatency: 7103946\r\nX-ExclaimerImprintAction: cdc58a61abe84fb9ac2114270688a4f9\r\nReceived: from ME2PR01MB4035.ausprd01.prod.outlook.com (2603:10c6:220:26::18)\r\n by ME2PR01MB5330.ausprd01.prod.outlook.com (2603:10c6:220:5e::16) with\r\n Microsoft SMTP Server (version=TLS1_2,\r\n cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.5144.29; Mon, 11 Apr\r\n 2022 22:56:01 +0000\r\nReceived: from ME2PR01MB4035.ausprd01.prod.outlook.com\r\n ([fe80::1ea:5b22:1f33:cf9f]) by ME2PR01MB4035.ausprd01.prod.outlook.com\r\n ([fe80::1ea:5b22:1f33:cf9f%7]) with mapi id 15.20.5144.030; Mon, 11 Apr 2022\r\n 22:56:01 +0000\r\nFrom: Marcus Monaghan <MarcusMonaghan@caulfieldgs.vic.edu.au>\r\nTo: Jason Du <jason.du@sentral.com.au>\r\nCC: \"edmund.chan@xwp.com\" <edmund.chan@xwp.com>\r\nSubject: Re: Sentral Case #00448180 - Admissions: (105047) Missing\r\n Applications between Portal and Sentral Admissions\r\nThread-Topic: Sentral Case #00448180 - Admissions: (105047) Missing\r\n Applications between Portal and Sentral Admissions\r\nThread-Index: AQHYL3YbUN/WclRA5ESrtpcXcAam/qyujYHIgAAOYoCAABpZ1IAACdUAgAeVauaAAAD0MIABbKyBgAAMcDCAAALSaYAAArdwgAAEZDiAAALkwIAzr3lD\r\nDate: Mon, 11 Apr 2022 22:55:59 +0000\r\nMessage-ID: <ME2PR01MB40351B7280EB2953F11E7F8AB3EA9@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\nReferences: <UcjY8000000000000000000000000000000000000000000000R87A59007tIlgD7XSmSLFynKLnvWZA@sfdc.net>\r\n <ME2PR01MB4035DC43857A4940C5FF39FFB3059@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\n <R7xqK000000000000000000000000000000000000000000000R87CSY00PFFu2CMQRka6o2EUFfu2bA@sfdc.net>\r\n <ME2PR01MB40352FCA7E24E77BBFE28CC0B3059@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\n <SYCPR01MB516868DDB3755B15B24AE9E2BA059@SYCPR01MB5168.ausprd01.prod.outlook.com>\r\n <ME2PR01MB403571D52889B89056708155B30A9@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\n <ME2PR01MB515524DB43ABF6A9DE6B5E71BA0A9@ME2PR01MB5155.ausprd01.prod.outlook.com>\r\n <ME2PR01MB4035737298EE3FBA7BF80457B30A9@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\n <SYCPR01MB5168444B68BC64A9349E637ABA0B9@SYCPR01MB5168.ausprd01.prod.outlook.com>\r\n <ME2PR01MB4035866E8CB9FCC1E740CD06B30B9@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\n <SYCPR01MB516849BB685D32046D18077EBA0B9@SYCPR01MB5168.ausprd01.prod.outlook.com>\r\n <ME2PR01MB403559B70594596F9FF84622B30B9@ME2PR01MB4035.ausprd01.prod.outlook.com>\r\n <SYCPR01MB5168AA1B36A79A402FBAB8BDBA0B9@SYCPR01MB5168.ausprd01.prod.outlook.com>\r\nIn-Reply-To: <SYCPR01MB5168AA1B36A79A402FBAB8BDBA0B9@SYCPR01MB5168.ausprd01.prod.outlook.com>\r\nAccept-Language: en-US\r\nX-MS-Has-Attach: yes\r\nX-MS-TNEF-Correlator:\r\nAuthentication-Results-Original: dkim=none (message not signed)\r\n header.d=none;dmarc=none action=none header.from=caulfieldgs.vic.edu.au\r\nX-MS-Office365-Filtering-Correlation-Id: 236fd4bf-e73f-4f1a-2113-08da1c0e85d5\r\nx-ms-traffictypediagnostic:\r\n ME2PR01MB5330:EE_|SY4AUS01FT006:EE_|MEAPR01MB3511:EE_|ME3AUS01FT005:EE_|ME1PR01MB1603:EE_\r\nX-Microsoft-Antispam-PRVS: <MEAPR01MB3511C515DBBDD156F12F153AB3EA9@MEAPR01MB3511.ausprd01.prod.outlook.com>\r\nX-MS-Exchange-SenderADCheck: 1\r\nX-MS-Exchange-AntiSpam-Relay: 0\r\nX-Microsoft-Antispam-Untrusted: BCL:0\r\nX-Microsoft-Antispam-Message-Info-Original: EtDHb/OVgAG08JcA2lQQ9TEQe9kuXd+aYzdT+EcxLSIu50H99eMSmHJPeC5+8FxK0F+R+3g9rCtQ58mrnQMBHxFWgJ8Bun+MWDklmWvH0NxdRE5hk7jXea83sPBY+KTCKgdCNunpMu9rzzL9v/fXIBKoXH8zOJSnUdtR3t4jtH5VTS5QXMktNriuZ8l/3zeLX9CuC35o2gz3BtTzXE5yhumDdZsuNcoxbd0DAZTw8NLkGQvD2nyzdyrgaxi7yokFXrT5wmHpPyLXdRarAAHWHrU8BHOv4tZ/RPcXxggg+uFLiuMcZFmq7rXdGnaUm0b6KQ/BJIKpzP8/gMdOtfqxi4c2pLDlgxHrLBAbk/SmJRFbBEknWO+eEmg4vP6lZ1zwgwLuyufktB18M/TAUHJiG6IJonaodVEaDdO9B8A9urnW8QDQ/S9bIaHD/LnLiv6cQCp81OKnHqz6kx2OnZtH1EcCvTvRzpp4EtHmCh+1rRcJhUL2VyXkgIndrGUb/RXlyLtolyI14zyIfc3gWUtSsDDH2XUTyOcrXKM2GWk+UGfxXYCkD7fCCH0sIeDU39tt/gPRV2ULe4+Kmi5TrIm72ZVo0Y3RB7o5nZ6BUPg1QbJFseJMqMsay7hWqUa8RDkWEavazwfJXL0ysbLAYJS1hMm+LMRY72Kop9NfDOV68yFFSfoAXAICPNP6GqeiWhFea2raJzfEnGCfT6kkDjIQuyqTDBihtbHAN1qRCTh5iZ60gCIqmhZt/UVlez7trc0LQfjH3PMC7HbLYf2QpajALg==\r\nX-Forefront-Antispam-Report-Untrusted: CIP:255.255.255.255;CTRY:;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:ME2PR01MB4035.ausprd01.prod.outlook.com;PTR:;CAT:NONE;SFS:(13230001)(366004)(76116006)(4326008)(66476007)(64756008)(66946007)(66556008)(55016003)(2906002)(66446008)(508600001)(5660300002)(30864003)(8936002)(71200400001)(786003)(8676002)(966005)(6916009)(52536014)(6506007)(76236003)(33656002)(83380400001)(186003)(53546011)(316002)(9686003)(7696005)(86362001)(38070700005)(122000001)(38100700002)(99936003)(166002)(579004)(559001);DIR:OUT;SFP:1102\r\nMIME-Version: 1.0\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: ME2PR01MB5330\r\nReturn-Path: marcusmonaghan@caulfieldgs.vic.edu.au\r\nX-EOPAttributedMessage: 1\r\nX-MS-Exchange-Transport-CrossTenantHeadersStripped: SY4AUS01FT006.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Office365-Filtering-Correlation-Id-Prvs: 492f7031-6e36-4767-e5cc-08da1c0e7307\r\nX-Microsoft-Antispam-Untrusted: BCL:0\r\nX-Microsoft-Antispam-Message-Info-Original:\r\n bVzRyXy6+dhVFi7t+IAeZVVP2Zl7aAHjAcsU443FBBXlY+hi+7i8teG1/0eg5RpzTRekqA5ytijvA3nduv99PGzm2ao7/X/MG+GZNRhp9EfMTYQrVrBlhkkSyL68Ex7s6C71p3jMgLSkCyC7kCFOepZ5GrG9HmmyFm9A1iA0EjsTyrw0JDI7qJDlwcqa4zsZtMngs0TshZFEqSriPkmEEw9WcbQwC5zz4kjcsRJg2XPc4eJ9+6tzKL6atYinHY9VtBAv62LRs0hdAZ+5zsNtm4S7WOBXboqZ6Jaw2VygVavznLv1BYpcEufdAuh1yP0YcYTi6Bw8o5DVpidDKxnK4hFWmzIADUmPuNwGSZm4p9ne6Rg8efDI6MSSJJmh0SuCSPSxkK73YLqkzKENsdWrLtaR5iWv/ErsuLPc0JcmCnloNsPpolJxNVQP/TeV3ULjWN1oRiUzchC+PBDwiN1+pDMEjOHWPQwlsZv/BQ7wMjSUu2UPMiRitZhu2D4I2mpSUAAJO5B8PaRPkiHOmmxLKSBwMtXPWaeIKw5U2jP2X59LZVQuM1nWMrlTEPCdV4LCn1H+vNaQ24RSoONWUlqtiqIudOf76CFElexLhoAU/cDrmg2hdT88GOyZvpylp3b3mYXKuDYyQPE3cROoQCYreKty/Zs9CdkSwQfbLXaCG0Rn+89tNatEHX9uf+HvvtMxNnkTCHxRZ7sHD/pAB+g3dmlq3iERi170wCbBodQSPHI=\r\nX-Forefront-Antispam-Report-Untrusted:\r\n CIP:13.70.157.244;CTRY:AU;LANG:en;SCL:1;SRV:;IPV:CAL;SFV:NSPM;H:au2.smtp.exclaimer.net;PTR:au2.smtp.exclaimer.net;CAT:NONE;SFS:(13230001)(36840700001)(46966006)(83380400001)(508600001)(82310400005)(30864003)(356005)(47076005)(70206006)(316002)(5660300002)(9686003)(6506007)(7696005)(2906002)(7636003)(99936003)(7596003)(33964004)(70586007)(33656002)(52536014)(166002)(36860700001)(86362001)(8936002)(26005)(186003)(336012)(53546011)(55016003)(966005)(8676002)(235185007)(4326008)(6916009)(45080400002)(76236003)(786003)(559001)(579004);DIR:OUT;SFP:1102\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: MEAPR01MB3511\r\nAuthentication-Results-Original: relay.mimecast.com;\tauth=pass\r\n smtp.auth=CAU11A162 smtp.mailfrom=marcusmonaghan@caulfieldgs.vic.edu.au\r\nX-Mimecast-Spam-Score: 0\r\nX-Mimecast-Originator: caulfieldgs.vic.edu.au\r\nContent-Language: en-AU\r\nContent-Type: multipart/mixed;\r\n\tboundary=\"_054_ME2PR01MB40351B7280EB2953F11E7F8AB3EA9ME2PR01MB4035ausp_\"\r\nX-MS-Exchange-Organization-ExpirationStartTime: 11 Apr 2022 22:56:32.6803\r\n (UTC)\r\nX-MS-Exchange-Organization-ExpirationStartTimeReason: OriginalSubmit\r\nX-MS-Exchange-Organization-ExpirationInterval: 1:00:00:00.0000000\r\nX-MS-Exchange-Organization-ExpirationIntervalReason: OriginalSubmit\r\nX-MS-Exchange-Organization-Network-Message-Id:\r\n 236fd4bf-e73f-4f1a-2113-08da1c0e85d5\r\nX-EOPTenantAttributedMessage: af3aff33-c2bc-40e4-b2cd-750013db9b14:0\r\nX-MS-Exchange-Organization-MessageDirectionality: Incoming\r\nX-MS-Exchange-Transport-CrossTenantHeadersStripped:\r\n ME3AUS01FT005.eop-AUS01.prod.protection.outlook.com\r\nX-MS-PublicTrafficType: Email\r\nX-MS-Exchange-Organization-AuthSource:\r\n ME3AUS01FT005.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-Organization-AuthAs: Anonymous\r\nX-MS-Office365-Filtering-Correlation-Id-Prvs:\r\n 71b9a622-2c14-42be-5911-08da1c0e7977\r\nX-MS-Exchange-AtpMessageProperties: SA|SL\r\nX-MS-Exchange-Organization-ACSExecutionContext: 04/11/2022 22:56:36;04/11/2022\r\n 22:56:51;{\"SubmissionInfo\":{\"SubmissionToken\":\"PFRva2VuIEVuZHBvaW50PSJodHRwczovL2VvcC1kcy1wcm9kLWF1LXNlYXUtMC1sYi1zaC5hdS5kYWFzLm1pY3Jvc29mdC5jb20vc29uYXJhcGkiIElkPSJkNWU5M2U4ZC0wZjllLTQ4N2ItYjYxYy0xZjY0NDgwNzI2N2EiIFJvbGU9IlN1Ym1pdHRlciIgVG9rZW5UeXBlPSJTdWJtaXNzaW9uVG9rZW4iIFNpZ25hdHVyZT0iaTk2UWdVRTNrd1YzMXl2aGRJa1pPb0NTTUlrdEFpM2pTSTNyUjdBQUtEeHBNTzVvVFNsYytzak5SaENhUEE3UXFuRzkrQzVJZkFoeGxDZklZbENwaVE9PSIgU2lnbmF0dXJlVmVyc2lvbj0iVmVyc2lvbjIxIiBBYWdDb29raWU9IkR5bmFtaWNTY2FsZURCIiAvPg\",\"Identity\":\"5627dce3-be58-4f92-ba08-d5884d63623a\"}};SC;S;0;04/11/2022\r\n 22:56:37;0|0|0|1|0|;\r\nX-MS-Exchange-Organization-SCL: 1\r\nX-Microsoft-Antispam: BCL:0;\r\nX-Forefront-Antispam-Report:\r\n CIP:103.96.23.111;CTRY:AU;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:au-smtp-delivery-111.mimecast.com;PTR:au-smtp-delivery-111.mimecast.com;CAT:NONE;SFS:(13230001)(336012)(5660300002)(26005)(4326008)(6916009)(16799955002)(33656002)(45080400002)(76236003)(83380400001)(52536014)(86362001)(55016003)(8636004)(30864003)(1096003)(7696005)(166002)(53546011)(8676002)(6506007)(966005)(36906005)(33964004)(9686003)(7596003)(7636003)(579004)(559001);DIR:INB;\r\nX-MS-Exchange-CrossTenant-OriginalArrivalTime: 11 Apr 2022 22:56:32.4460\r\n (UTC)\r\nX-MS-Exchange-CrossTenant-Network-Message-Id: 236fd4bf-e73f-4f1a-2113-08da1c0e85d5\r\nX-MS-Exchange-CrossTenant-Id: af3aff33-c2bc-40e4-b2cd-750013db9b14\r\nX-MS-Exchange-CrossTenant-AuthSource:\r\n ME3AUS01FT005.eop-AUS01.prod.protection.outlook.com\r\nX-MS-Exchange-CrossTenant-AuthAs: Anonymous\r\nX-MS-Exchange-CrossTenant-FromEntityHeader: Internet\r\nX-MS-Exchange-Transport-CrossTenantHeadersStamped: ME1PR01MB1603\r\nX-MS-Exchange-Transport-EndToEndLatency: 00:00:22.4962323\r\nX-MS-Exchange-Processed-By-BccFoldering: 15.20.5144.029\r\nX-Microsoft-Antispam-Mailbox-Delivery:\r\n\tucf:0;jmr:0;auth:0;dest:I;ENG:(910001)(944506458)(944626604)(920097)(930097);\r\nX-Microsoft-Antispam-Message-Info:\r\n\t=?us-ascii?Q?lELfRLP6YNbCqAE4le/od3S+tzi7DuYmVBGXneH8EQO1ye4i4+yLoMx0EYMB?=\r\n =?us-ascii?Q?oBYH9IET1IvY1J+zgSL27JNzPHwajgYfEmZjCP+e7a42+1ofSoZQZ5AsgiMy?=\r\n =?us-ascii?Q?2bqRnwgisg/Ztbc6ROUYLnrsjAX+YfAVcjxNjO6B8XMtFyIuO5XH4DL5bHri?=\r\n =?us-ascii?Q?7X7jI58sFDxaAGLZb3znRvMOMRTLemLBflgKikpBjcy8aSJ+F2uK2B1ldv2b?=\r\n =?us-ascii?Q?gvF0HxlrOUXRyuG2njxRjisyW8j2pVgMwmxP0BBBABqRR0X4N+275SCkgg3+?=\r\n =?us-ascii?Q?HPyp/jYMCfp1bN2FmNh9wEr0Cy2aGeykUy8JUW4QuKnpG5g10Wl4zTdvKzGZ?=\r\n =?us-ascii?Q?esNVC/ZFU4wwQmya3N5gWFRpxbClA69AYQK4DPs8G8HGkqAaZlKQMhTO8JMe?=\r\n =?us-ascii?Q?/ZWDnsYABsOvUltqOWtgJZ/eEdTeFoLMRjlOYCwoJ6OM0GLdHkYbqOy0rbBC?=\r\n =?us-ascii?Q?LKUBrkg2x6d8t3vmbirdtaCpiDdcWfyLLAu8r/GsZ2dU6akBCRYPvEH885aa?=\r\n =?us-ascii?Q?ZLFV/g6M2NoJ7zu/NzJO47YaAoPb27TxPGVBqQIvkqZGQb69EjQ/oiyCFHqO?=\r\n =?us-ascii?Q?7alQ+F1tIwjrAb5FV3ZFTBRLnNX10tDckhBdwGOaixSY3tPIpQO5tEFw+rTN?=\r\n =?us-ascii?Q?llJs8ZjN5sJgXzKxL0bQKy9QcMXS6OKETCviw3ErfONFLeQY4NvkwtvKMbOB?=\r\n =?us-ascii?Q?N6N88YiXIn7cLfso/1UH4K044HFe93Y+dLzT5Pd28ievuPYL+0NDFX7tK9to?=\r\n =?us-ascii?Q?MxDy9DX7PdEGb3lWRRUUA+YSd895spn4JAFVZLSrtT1Goi/GYTdvpP3JQO6j?=\r\n =?us-ascii?Q?atg9Dx7YXfLKVYZFMPIGgrtZZmFmyCJjtQKACTgfHca7lgxFQP2Ouyb0jsdT?=\r\n =?us-ascii?Q?uQeFqvOULiRybsmdMeiSxNWUCIL3nsdImFJGYX61AKPJU4nWm5d/GyPx8OUi?=\r\n =?us-ascii?Q?bI0PPFw4rUTOh84kkP3U5zD/qYxAUxqhzLCnAJKZjub+SnfHLhtChtPSxBHh?=\r\n =?us-ascii?Q?ksaoiDmuQC6MUqPe5VAw9yXaynk08nfk3RZlyfYDOg3Z1FX868dsOfA+JxrD?=\r\n =?us-ascii?Q?i79P4MyYR2Syu0LWMxHkt78Y1+1IfSUYAqCzG/O6yxvvr5XKQ4307SvH5+b6?=\r\n =?us-ascii?Q?Zpw+1t+hxxyIoiqstFGISXWEjtrckTSyM/lyXf0rxhGUQEhzdOAVdJeWoaLg?=\r\n =?us-ascii?Q?eOi00CajMdyUUsphcG/87PjJfW7P0ps9NK9B2fPi/peH2cTkAt5iPg98xU0H?=\r\n =?us-ascii?Q?5NfQ2Z4BbRmZyRARo9/wWrE53LttT42iO6xj1mdTVdsJB1MDPn+VcUTRKA42?=\r\n =?us-ascii?Q?OzoK1cXUBjWay03TMYZ9SlYVPrO9tOlxPrZsCDPfhWiIqj3hNweBChtD0cuv?=\r\n =?us-ascii?Q?S6V90L5dgwPsAC3F0XK8fH1U0PpFeadvhi88xFHItpuuJecZdKCjE6qouedb?=\r\n =?us-ascii?Q?2SAbjU0FzrYsBWx1gqFSBVSfkX2nLsmHkqKLvYy1ghVl0/W2s1+H5pmnhEwZ?=\r\n =?us-ascii?Q?OZY8a0FCONmJsyn1YO1HVaJ9crQuHGD5Gw+op5usoBEFmr+LQRFGs1Yk01gX?=\r\n =?us-ascii?Q?/pH7FPxA2KN560L1k8NhzQPbHaW1jN1oWlI62rhGUnsZfcbxZzBJg1N3mIU/?=\r\n =?us-ascii?Q?gJVDgOSkwGkXKa+6PbvpzkT/8NXaSeW8qev0o7GRwcrzxk75gQM+CRU24Btn?=\r\n =?us-ascii?Q?2OW1PPQO7/BA77uK/gsBE55/YrU0CaKI4PsKFW/Db16/diQIlMPrSGeIcPAD?=\r\n =?us-ascii?Q?SmrAd4V1wH2kcNPY5EewGNV5fubd1qPjxsBqzbpxncXT/BEQujuS3OQQ+Vch?=\r\n =?us-ascii?Q?nV9gWGCUv0rxZ2x/ubakpF0yYHrrfM+IaHo=3D?=\r\nX-MS-Exchange-Safelinks-Url-KeyVer: 1\r\n",

                "senderSmtpAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                "creatorSMTPAddress": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                "senderName": "Marcus Monaghan",
                "senderEmail": "MarcusMonaghan@caulfieldgs.vic.edu.au",
                "senderAddressType": "SMTP",
                "inetAcctName": "jason.du@sentral.com.au",
                "creationTime": "Mon, 11 Apr 2022 23:17:29 GMT",
                "lastModificationTime": "Mon, 11 Apr 2022 23:17:29 GMT",
                "clientSubmitTime": "Mon, 11 Apr 2022 22:55:59 GMT",
                "messageDeliveryTime": "Mon, 11 Apr 2022 22:56:57 GMT",
                "messageFlags": 19,
                "internetCodepage": 65001,
                "messageLocaleId": 3081,
                "messageCodepage": 1252
            }*/

            const ignoreKeys = ['subject', 'body', 'compressedRtf', 'recipients', 'attachments', 'headers'];
            Object.keys(fileData).forEach(key => {
                if (ignoreKeys.indexOf(key) !== -1) {
                    return;
                }

                addMetadata(key, fileData[key]);
            });

            fileData.headers.split(/(?:\r\n|^)\s*([a-zA-Z-_]+):/).reduce((last, now) => {
                if (!last) {
                    return now;
                }

                now = now.replace(/\n|\r/g, '');

                if (now.length > 100) {
                    addHeader(last, now.substring(0, 100) + `... <i>(full length is ${now.length})</i>`);
                } else {
                    addHeader(last, now);
                }

            }, null);

            $content_subject.appendChild(toElement(fileData.subject));
            $content_body.innerHTML = fileData.body
                .replace(/\r\n/g, "\n")
                .replace(/\n\n/g, '<br>');
        }

        reader.readAsArrayBuffer(file); // start reading the file data.
    }
});
$dropper.addEventListener('dragenter', e => {
    e.preventDefault()
    e.stopPropagation()
    $dropit.style.display = "flex";
    e.dataTransfer.dropEffect = 'copy';
})
$dropper.addEventListener('dragover', e => {
    e.preventDefault()
    e.stopPropagation()
    $dropit.style.display = "flex";
    e.dataTransfer.dropEffect = 'copy';
})
$dropper.addEventListener('dragleave', () => {
    e.preventDefault()
    e.stopPropagation()
    $dropit.style.display = "none";
})

function addMetadata(name, value) {
    $content_metadata.appendChild(toElement(`<li><strong>${name}: </strong> ${value}</li>`))
}

function addHeader(name, value) {
    $content_headers.appendChild(toElement(`<li><strong>${name}: </strong> ${value}</li>`))
}

function toElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}