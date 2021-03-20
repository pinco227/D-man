describe('SPA navigation', () => {
    it('should fetch a page', () => {
        const page = 'homepage.html';

        const result = loadPage(page);

        expect(result).not.toBe('undefined');
    });

    it('should load all pages', (done) => {
        const pages = ['homepage.html', 'music-library.html', 'video-library.html', 'photo-gallery.html', 'about-me.html', 'contact-page.html'];
        spyOn(window, 'loadPage').and.returnValue(Promise.resolve());

        loadAllPages()
            .then(() => {
                pages.forEach((page) => {
                    expect(loadPage).toHaveBeenCalledWith(page);
                });
                done();
            });
    });

    it('should run (main)', (done) => {
        spyOn(window, 'loadAllPages').and.returnValue(Promise.resolve());
        spyOn(window, 'setPage').and.returnValue();

        main()
            .then(() => {
                expect(loadAllPages).toHaveBeenCalled();
                expect(setPage).toHaveBeenCalled();
                expect(routes).toBeDefined();
                expect(titles).toBeDefined();
                done();
            });
    });

    it('should navigate on click', () => {
        const mockEvent = new Event('click');
        const mockHref = 'folder1/folder2/folder3/page';
        spyOn(window, 'setPage').and.returnValue();
        spyOn(window.history, 'pushState').and.callFake(() => { });

        navigate(mockEvent, mockHref);

        expect(setPage).toHaveBeenCalledWith('page');
        expect(window.history.pushState).toHaveBeenCalled();
    });
});

describe('Data (XMLHttpRequest)', () => {
    it('should call the callback with obj and 200 status', (done) => {
        getData(musicApiUrl, (data, status) => {
            expect(data).toBeDefined();
            expect(data).not.toEqual({});
            expect(status).toBe(200);
            done();
        });
    });
    it('when url is bad, the callback should be called with empty obj and 404 status', (done) => {
        getData("/some/random/url", (data, status) => {
            expect(data).toEqual({});
            expect(status).toBe(404);
            done();
        });
    });
    it('when error, the callback should be called with empty obj and error status', (done) => {
        getData("htp://some/random/url", (data, status) => {
            expect(data).toEqual({});
            expect(status).not.toBe(200);
            done();
        });
    });

})