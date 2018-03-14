export declare class TNSEZAudioPlayer {
    private _audioFileLoaded;
    private _currentAudioFile;
    private _currentAudioFilePath;
    private _playing;
    private _delegate;
    private _playbackSession;
    constructor(emitEvents?: boolean);
    delegate(): any;
    togglePlay(fileName?: string, reloadTrack?: boolean): void;
    pause(): void;
    isPlaying(): boolean;
    duration(): number;
    formattedDuration(): string;
    totalFrames(): number;
    formattedCurrentTime(): string;
    setCurrentTime(time: number): void;
    seekToFrame(frame: number): void;
    volume(): number;
    setVolume(volume: number): void;
    pan(): number;
    setPan(pan: number): void;
    device(): any;
    private loadAndPlayAudioFile(file);
    private noFileError();
}
