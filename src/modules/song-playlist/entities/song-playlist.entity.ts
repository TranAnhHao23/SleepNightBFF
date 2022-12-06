import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Song } from "../../song/entities/song.entity";
import { Playlist } from "../../playlist/entities/playlist.entity";

@Entity({ name: 'song-playlist' })
export class SongPlaylist extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  songPlaylistId: string;

  @ManyToOne(() => Song, (song) => song.songId)
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @ManyToOne(() => Playlist, (playlist) => playlist.playlistId)
  @JoinColumn({ name: 'playlist_id' })
  playlist: Playlist;
}
