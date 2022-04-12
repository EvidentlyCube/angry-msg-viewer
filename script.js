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