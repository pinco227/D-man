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

describe('Data', () => {
    it('when url is bad, it should not call the callback', () => {
        const noCall = jasmine.createSpy('callback');

        getData("/some/random/url", noCall);
        expect(noCall).not.toHaveBeenCalled();
    })
})