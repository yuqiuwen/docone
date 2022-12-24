import os
import time, datetime
import argparse

dic = {
    'title': '',
    'description': '',
    'keywords': [],
    'tags': [],
    'date': ''
}

def get_update_time(filepath):
    return time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime(os.path.getmtime(filepath)))

def gen_frontmatter(filepath):
    
    ...


if __name__ == "__main__":

    

    parser = argparse.ArgumentParser()
    parser.add_argument("-a", dest="author")
    parser.add_argument("--authors", dest="authors", default='Qiuwen')
    args = parser.parse_args()

    if os.path.exists('docone/blog'):...

    title, description = input("title: "), input("description: ")
    keywords, tags = input("keywords: ").split('/'), input("tags: ").split('/')

    
    if args.author:
        dic['author'] = args.author
    else:
        dic['authors'] = args.authors

    # gen_frontmatter('./doc_script.py')
    print(args, keywords, tags)
