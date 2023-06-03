// url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다.
function parseURL(url) {
    // url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환한다.
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    if (!parsedURL) return {};

    // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출한다.
    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
}

console.log(parseURL('https://developer.mozilla.org/ko/docs/Web/JavaScript'));