﻿using System;
using System.Collections.Generic;

namespace AlgoORM
{
    public class ForumPost
    {
        public string Topic { get; set; }
        public string Body { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Dictionary<string, object>> forumPostsFromDb = new List<Dictionary<string, object>>() {
                new Dictionary<string, object>{
                    { "Topic", "Today I learned something cool."},
                    { "Body", "ORMs are very cool."},
                    { "Rating", 10}
                },
                // https://store.steampowered.com/app/821320/SPAGHET/
                new Dictionary<string, object>{
                    { "Topic", "Somebody toucha my spaghet "},
                    { "Body", "Spaghet is a video game on steam for those who cannot resist slapping spaghet."},
                    { "Rating", 9}
                },
                new Dictionary<string, object>{
                    { "Topic", "I'm a huge fan."},
                    { "Body", "Whirl, whirl, whirl."},
                    { "Rating", 4}
                },
                new Dictionary<string, object>{
                    { "Topic", "Honesty & Motivation"},
                    { "Body", "Do you want to do what you say you want to do bad enough to do what needs to be done?"},
                    { "Rating", 4}
                }
            };


            // ~~~~~~~~~~~~~~~~~~~~~ TASK: convert forumPostsFromDb into a List<ForumPost> ~~~~~~~~~~~~~~~~~~~~~ 
            List<ForumPost> posts = new List<ForumPost>();
            foreach (Dictionary<string, object> dict in forumPostsFromDb)
            {
                ForumPost post = new ForumPost();
                post.Topic = (string)dict["Topic"];
                post.Body = (string)dict["Body"];
                post.Rating = (int)dict["Rating"];
                posts.Add(post);
            }
        }
    }
}