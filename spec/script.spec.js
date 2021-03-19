describe('SPA navigation', () => {
    it('should fetch a page', () => {
        // arrange
        const page = 'homepage.html';

        // act
        const result = loadPage(page);

        // assert
        expect(result).not.toBe('undefined');
    })
});