describe('Player (click RE-RUN button for confirming user action)', () => {
    let audio;
    Amplitude.init(globalPlaylist);

    beforeAll(() => {
        audio = Amplitude.getAudio();
        audio.muted = true;
    });

    afterEach(() => {
        Amplitude.stop();
    });

    it('should initialize (with playlist)', () => {
        expect(Amplitude.getSongs()).toEqual(globalPlaylist.songs);
    });

    it('should be able to play', () => {
        Amplitude.play();

        expect(audio.paused).toBeFalse();
        expect(Amplitude.getPlayerState()).toBe("playing");
    });

    it('should be able to pause', () => {
        Amplitude.play();
        Amplitude.pause();

        expect(audio.paused).toBeTrue();
    });

    describe('Controls', () => {
        it('should be able to change song', () => {
            const songIndex = Math.floor(Math.random() * globalPlaylist.songs.length);

            Amplitude.playSongAtIndex(songIndex);

            expect(Amplitude.getActiveIndex()).toBe(songIndex);
        });
        it('should be able to play next', () => {
            const activeIndex = Amplitude.getActiveIndex();

            Amplitude.next();

            expect(Amplitude.getActiveIndex()).toBe(activeIndex + 1);
        });
        it('should be able to play prev', () => {
            Amplitude.playSongAtIndex(2);
            Amplitude.prev();

            expect(Amplitude.getActiveIndex()).toBe(1);
        });
        it('should be able to toggle shuffle', () => {
            Amplitude.setShuffle(true);

            expect(Amplitude.getShuffle()).toBe(true);
            expect(Amplitude.getSongsState()).not.toEqual(globalPlaylist.songs);
        });
        it('should be able to toggle loop', () => {
            Amplitude.setShuffle(true);

            expect(Amplitude.getShuffle()).toBe(true);
        });
        it('should be able to seek', () => {
            const setPercentage = Math.floor(Math.random() * 100);

            Amplitude.setSongPlayedPercentage(setPercentage);

            expect(Amplitude.getSongPlayedPercentage()).toBe(setPercentage);
        })
    });
});