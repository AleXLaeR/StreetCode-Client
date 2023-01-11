import { makeAutoObservable, runInAction } from 'mobx';
import subtitlesApi from '@api/additional-content/subtitles.api';
import Subtitle from '@models/additional-content/subtitles.model';

export default class SubtitleStore {
    public subtitles = new Map<number, Subtitle>();

    public constructor() {
        makeAutoObservable(this);
    }

    private setSubtitles = (subtitles: Subtitle []) => {
        this.subtitles = subtitles.reduce((map: Map<number, Subtitle>, obj) => {
            map.set(obj.id, obj);
            return map;
        }, new Map<number, Subtitle>());
    };

    public getSubtitlesArray = () => Array.from(this.subtitles.values());

    public getById = async (id: number) => {
        try {
            const subtitle = await subtitlesApi.getById(id);
            runInAction(() => {
                this.subtitles.set(id, subtitle);
            });
        } catch (err: unknown) {
            console.log(err);
        }
    };

    public getAll = async () => {
        try {
            const subtitles = await subtitlesApi.getAll();
            runInAction(() => {
                this.setSubtitles(subtitles);
            });
        } catch (err: unknown) {
            console.log(err);
        }
    };

    public getByStreetcodeId = async (streetcodeId: number) => {
        try {
            const subtitle = await subtitlesApi.getByStreetcodeId(streetcodeId);
            runInAction(() => {
                this.subtitles.set(streetcodeId, subtitle);
            });
        } catch (err: unknown) {
            console.log(err);
        }
    };

    public create = async (subtitle: Subtitle) => {
        try {
            await subtitlesApi.create(subtitle);
            runInAction(() => {
                this.subtitles.set(subtitle.id, subtitle);
            });
        } catch (err: unknown) {
            console.log(err);
        }
    };

    public update = async (subtitle: Subtitle) => {
        try {
            await subtitlesApi.update(subtitle);
            runInAction(() => {
                const subtitleId = subtitle.id;
                const updatedSubtitle = { ...this.subtitles.get(subtitleId), ...subtitle } as Subtitle;
                this.subtitles.set(subtitleId, updatedSubtitle);
            });
        } catch (err: unknown) {
            console.log(err);
        }
    };

    public delete = async (subtitleId: number) => {
        try {
            await subtitlesApi.delete(subtitleId);
            runInAction(() => {
                this.subtitles.delete(subtitleId);
            });
        } catch (err: unknown) {
            console.log(err);
        }
    };
}
