<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'marcin',
            'email' => 'm.koska2@wp.pl',
            'password' => Hash::make('12345'),
            'created_at' => now()
        ]);
    }
}